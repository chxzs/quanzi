<template>
	<view class="detail">
		<!-- 		<unicloud-db v-slot:default="{data, loading, error, options}"
		:where="`_id=='${artid}'`"
		 :collection="collections"
		 :getone="true"> -->

		<view class="container">
			<view v-if="loadingState" class="skeleton">
				<u-skeleton rows="8" title loading></u-skeleton>
			</view>
			<view v-else>
				<view class="title">{{detailObj.title}}</view>
				<view class="userinfo">
					<view class="avatar">
						<image :src="giveAvatar(detailObj)" mode="aspectFill"></image>
					</view>
					<view class="text">
						<view class="name">
							{{giveName(detailObj)}}
						</view>
						<view class="small">
							<text>
								<uni-dateformat :date="detailObj.publish_date"
									format='yyyy/MM/dd hh:mm:ss'></uni-dateformat>
							</text>· 发布于{{detailObj.province}}
						</view>
					</view>
				</view>
				<view class="content">
					<!-- <view v-html="data.content"></view> -->
					<u-parse :content="detailObj.content" :tagStyle="tagStyle"></u-parse>
				</view>

				<view class="like">
					<view class="btn" :class="detailObj.isLike ? 'active' : ''" @click="clickLike">
						<text class="iconfont icon-good-fill"></text>
						<text v-if="detailObj.like_count">{{detailObj.like_count}}</text>
					</view>
					<view class="users">
						<template v-for="item in likeUserArr">
							<image :src="giveAvatar(item)" mode="aspectFill"></image>
						</template>
					</view>
					<view class="text"><text class="num">{{detailObj.view_count}}</text>人看过</view>
				</view>

			</view>
		</view>
		<!-- </unicloud-db> -->
		<view class="comment" >
			<view v-if="!commentList.length && nocomment">
				<u-empty mode="comment" icon="https://cdn.uviewui.com/uview/empty/comment.png">
				</u-empty>
			</view>
			
			<view class="content">
				<view class="item" v-for="item in commentList">
					<comment-item :item="item" @rmcomment="Prmcomment"></comment-item>
				</view>
			</view>
		</view>
		<comment-frame :commentObj="commentObj" @commentEnv="PcommentEnv"></comment-frame>
	</view>
</template>

<script>
	import pageJson from "@/pages.json"
	import {
		store
	} from "@/uni_modules/uni-id-pages/common/store.js"
	import {
		giveName,
		giveAvatar,
		likeFun
	} from "../../utils/tools.js"
	const db = uniCloud.database();
	const utilsObj = uniCloud.importObject("utils", {
		customUI: true, // 取消自动展示的交互提示界面
	});
	export default {
		data() {
			return {
				artid: "",
				tagStyle: {
					p: "line-height:1.7em;font-size:16px;padding-bottom:10rpx", //	text-indent: 2em;首行缩进两个汉字
					img: "margin:10rpx 0"
				},
				loadingState: true,
				detailObj: null,
				likeUserArr: null,
				nocomment:false,
				commentList:[],
				commentObj:{
					article_id:"",
					comment_type:0
				}
				// collections:[
				// 	db.collection("quanzi_article").getTemp(),
				// 	db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp(),
				// ]
			};
		},
		onLoad(e) {

			if (!e.id) {
				this.errFun()
				return
			}
			this.artid = e.id;
			this.commentObj.article_id = e.id;
			this.getData();
			this.getUserlike();
			this.getComment();
			this.readUpdate();
			console.log(this.artid);
		},
		methods: {
			giveName,
			giveAvatar,
			//删除评论
			Prmcomment(e){
				let index = this.commentList.findIndex(item=>{
					return item._id = e
				})
				this.commentList.splice(index,1)
			},
			//评论无感操作，子向父传值
			PcommentEnv(e){
				console.log(e);
				this.commentList.unshift({
					...e,
					...this.commentObj,
					"user_id":[store.userInfo]
				})
			},
			//获取评论
			getComment(){
				 let commentTemp = db.collection("quanzi_comment").where(`article_id =="${this.artid}"&&comment_type==0`).orderBy("comment_date desc").limit(5).getTemp();
				 let userTemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file,role").getTemp();
				 db.collection(commentTemp,userTemp).get().then(res=>{
					 console.log("权限",res);
					 if(!res.result.data.length){
						 this.nocomment = true
						 return
					 }
					 this.commentList = res.result.data
					 console.log(this.commentList);
				 })
			},
			//获取点赞用户
			getUserlike() {
				let likeTemp = db.collection("quanzi_like").where(`article_id=="${this.artid}"`).getTemp();
				let userTemp = db.collection("uni-id-users").field("_id,avatar_file").getTemp()
				db.collection(likeTemp, userTemp).orderBy("publish_date desc").limit(3).get().then(res => {
					res.result.data = res.result.data.reverse(); //翻转数组
					this.likeUserArr = res.result.data;
					console.log(res.result.data);
				})
			},
			//点赞操作
			clickLike() {
				if (!store.hasLogin) {
					uni.showModal({
						title: "是否确认登录",
						success: (res) => {
							if (res.confirm) {
								uni.navigateTo({
									url: '/' + pageJson.uniIdRouter.loginPage
								})
							}
						}
					})
					return
				}
				let time = Date.now();
				if (time - this.liketime < 2000) {
					uni.showToast({
						title: "操作频繁",
						icon: "none"
					})
					return
				}
				this.liketime = time;
				this.detailObj.isLike = !this.detailObj.isLike;
				this.detailObj.isLike ? this.detailObj.like_count++ : this.detailObj.like_count--; //这个地方得注意，没赋值页面动画变不了
				// if(time - this.isLiketime<2000){
				// 	uni.showToast({
				// 		title:"操作过于频繁",
				// 		icon:"none"
				// 	})
				// }else{
				// 	this.isLiketime = time
				// }
				likeFun(this.artid)
			},

			//刷新阅读量
			readUpdate() {
				utilsObj.operation("quanzi_article", "view_count", this.artid, 1).then(res => {
					console.log(res);
				})
			},
			//id出错处理
			errFun() {
				uni.showToast({
					title: "参数有误",
					icon: "error"
				});
				setTimeout(() => {
					uni.reLaunch({
						url: "/pages/index/index"
					})
				}, 1000)

			},
			//获取数据
			getData() {
				let artTemp = db.collection("quanzi_article").where(`_id=="${this.artid}"`).getTemp();
				let userTemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp();
				let likeTemp = db.collection("quanzi_like").where(`article_id=="${this.artid}" && user_id==$cloudEnv_uid`)
					.getTemp()
				let arrTemp = [artTemp, userTemp];
				if (store.hasLogin) {
					arrTemp.push(likeTemp) //修改未登录跳转页面bug
				}
				db.collection(...arrTemp).get({
					getOne: true
				}).then(res => {
					// console.log("res.result.data !== undefined", res.result.data === undefined);
					if (!res.result.data) {
						this.errFun();
						return
					}
					this.loadingState = false;
					this.detailObj = res.result.data;
					// console.log("this.detailObj", this.detailObj);
					// let isLike = res.result.data._id?.quanzi_like?.length? true:false;  //修改未登录跳转页面bug
					// this.detailObj.isLike = isLike
					// console.log("isLike", isLike);
					// console.log("this.detailObj", this.detailObj);
					let islike123 = false;
					if (store.hasLogin) {
						islike123 = res.result.data._id.quanzi_like.length ? true : false; //很牛马
					}
					this.detailObj.isLike = islike123
					// console.log(this.detailObj);
					uni.setNavigationBarTitle({
						title: this.detailObj.title
					})
				}).catch(err => {
					console.log("err", err);
					console.log("catch(err=>");
					this.errFun()
				})
			}
		}
	}
</script>

<style lang="scss">
	.detail {
		background: #f8f8f8;
		min-height: calc(100vh - var(--window-top)); //屏幕高度减去顶部高度
		.container {
			padding: 30rpx;
			background: #fff;

			.skeleton {
				padding: 30rpx;
			}

			.title {
				font-size: 46rpx;
				color: #333;
				line-height: 1.4em;
				font-weight: 600;
			}

			.userinfo {
				padding: 20rpx 0 50rpx;
				display: flex;
				align-items: center;

				.avatar {
					width: 60rpx;
					height: 60rpx;
					padding-right: 15rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}

				.text {
					font-size: 28rpx;
					color: #555;

					.small {
						font-size: 20rpx;
						color: #999;
					}
				}
			}

			.content {}

			.like {
				display: flex;
				flex-direction: column; //垂直排列
				align-items: center;
				padding: 80rpx 50rpx 50rpx;

				.btn {
					width: 260rpx;
					height: 120rpx;
					background: #e4e4e4;
					border-radius: 100rpx;
					color: #fff;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					font-size: 28rpx;

					.iconfont {
						font-size: 50rpx;
					}

					&.active {
						background: #0199FE;
					}
				}

				.text {
					font-size: 26rpx;
					color: #666;

					.num {
						color: #0199FE
					}

					.spot {
						padding: 0 10rpx;
					}
				}

				.users {
					display: flex;
					justify-content: center;
					padding: 30rpx 0;

					image {
						width: 50rpx;
						height: 50rpx;
						border-radius: 50%;
						border: 3px solid #fff;
						margin-left: -20rpx;
					}
				}
			}

		}
		.comment{
			padding: 30rpx;
			padding-bottom: 120rpx;
		}
	}
</style>