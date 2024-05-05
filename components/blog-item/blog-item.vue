<template>
	<view class="blog-item">
		<view class="top">
			<view class="userInfo">
				<view class="avatar">
					<image :src="giveAvatar(item)"
						mode="aspectFill"></image>
				</view>
				<view class="name">
					{{giveName(item)}}
				</view>
				<view class="time">
					<uni-dateformat :date="item.publish_date" :threshold="[0,1000*60*60*24*30]"></uni-dateformat>
				</view>
			</view>
			<view class="more"  v-if="uniIDHasRole('webmaster')||uniIDHasRole('admin')||item.user_id[0]._id==uid">
				<text class="iconfont icon-ellipsis" @click="sheetShow=true"></text>
			</view>
		</view>
		<view class="body">
			<view class="title" @click="goDetail">
				{{item.title}}
			</view>
			<view class="text" @click="goDetail" v-if="item.description">
				{{item.description}}
			</view>
			<view class="piclist" v-if="item.picArr.length">
				<view class="pic" :class="item.picArr.length==1 ? 'only': ''" v-for="(pic,index) in item.picArr" :key="pic"
	>
					<image @click="previewImage(index)" :src="pic" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<view class="info">
			<view class="box">
				<text class="iconfont icon-a-27-liulan"></text>
				<text>{{item.view_count}}</text>
			</view>
			<view class="box">
				<text class="iconfont icon-a-5-xinxi" @click="goDetail"></text>
				<text>{{item.comment_count}}</text>
			</view>
			<view class="box" :class="like ?'active':''" @click="clickLike">
				<text class="iconfont icon-a-106-xihuan " ></text>
				<text>{{item.like_count}}</text>
			</view>
		</view>
		<u-action-sheet :actions="list" :show="sheetShow"
		:closeOnClickOverlay="true" :closeOnClickAction="true" 
		  @select="selectClick" cancelText="取消" @close="closeClick"></u-action-sheet>
		  <!-- :closeOnClickOverlay="true" :closeOnClickAction="true"有啥用 -->
	</view>
</template>

<script>
	import pageJson from "@/pages.json"
	import {giveName,giveAvatar,likeFun} from "../../utils/tools.js"
	import {store} from "@/uni_modules/uni-id-pages/common/store.js"
	const db = uniCloud.database()
	export default {
		name: "blog-item",
		props: {
			item: {
				typeof: Object,
				default () {
					return
				}
			}
		},
		data() {
			return {
				picurls: [1],
				sheetShow:false,
				uid:uniCloud.getCurrentUserInfo().uid,
				liketime:null,
				like:this.likeActive(),
				list:[
					{
						name:"修改",
						type:"edit"
						// disabled:true
					},
					{
						name:"删除",
						type:"del",
						color:'#F56C6C',
						// disabled:true
					}
				]
			};
		},
		methods:{
			giveName,giveAvatar,
			//首页点击点赞
			clickLike(){
				if(!store.hasLogin){
					uni.showModal({
						title:"是否确认登录",
						success: (res) => {
							if(res.confirm){
								uni.navigateTo({
									url:'/'+pageJson.uniIdRouter.loginPage
								})
							}
						}
					})
					return
				}
				if(Date.now()-this.liketime<1000){
					uni.showToast({
						title:"操作频繁",
						icon:"error",
						mask:true
					})
					return
				}
				this.like = !this.like;
				this.liketime = Date.now();
				this.like ? this.item.like_count++:this.item.like_count--
				// thi.$emit("update:item",this.item)
				// this.$emit("update:like",this.like)
				this.$emit("update:like_count",this.item.like_count)
				likeFun(this.item._id)
			},
			//点赞过高亮
			likeActive(){
				db.collection("quanzi_like").where(`article_id=="${this.item._id}" && user_id==$cloudEnv_uid`)
				.get().then(res=>{
					if(res.result.data.length) this.like=true
					return false
				})
			},
			//点击选择
			selectClick(e){
				this.sheetShow=false
				console.log(this.item);
				
				if(e.type=="del"){
					
					this.delFun()
				}
			},
			delFun(){
				uni.showLoading({
					title:"加载中"
				})
					db.collection("quanzi_article").doc(this.item._id).update({
						delState:true
					}).then(res=>{
						// console.log(res);
						uni.hideLoading();
						uni.showToast({
							title:"删除成功",
							icon:"none"
						})
						this.$emit("delEvent",true)
					}).catch(err=>{
						uni.hideLoading()
					})
			},
			//取消弹窗
			closeClick(){
				this.sheetShow=false
			},
			//点击跳转到详情页
			goDetail(){
				uni.navigateTo({
					url:"/pagetwo/detail/detail?id="+this.item._id
				})
			},
			//图片预览
			previewImage(index){
				console.log(this.item.picArr);
				uni.previewImage({
					urls:this.item.picArr,
					current:index
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.blog-item {
		.top {
			display: flex;
			font-size: 32rpx;
			align-items: center;
			justify-content: space-between;

			.userInfo {
				display: flex;
				align-items: center;

				.avatar {
					width: 40rpx;
					height: 40rpx;
					border-radius: 50%;
					overflow: hidden; //超出部分隐藏

					image {
						width: 100%;
						height: 100%;
						display: block; //块级元素
					}
				}

				.name {
					color: #222;
					padding-left: 10rpx;

				}

				.time {
					color: #888;
					padding-left: 20rpx;
					font-size: 22rpx;
				}

				.more {
					padding: 5rpx;

					.iconfont {
						font-size: 50rpx;
						color: #888;
					}
				}
			}

		}

		.body {
			padding: 15rpx 0 30rpx;

			.title {
				font-size: 44rpx;
				color: #000;
				font-weight: 600; //字体粗细
				text-align: justify; //字体样式《实现两端对齐
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			.text {
				padding-top: 10rpx;
				padding-bottom: 10rpx;
				font-size: 30rpx;
				text-align: justify;
				color: #888;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;

			}

			.piclist {
				display: flex;
				padding-top: 20rpx;

				.pic {
					width: 225rpx;
					height: 225rpx;
					margin-right: 6rpx;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
					}

					&:first-child {
						border-radius: 20rpx 0 0 20rpx;
					}

					&:last-child {
						border-radius: 0 20rpx 20rpx 0;
					}

					&.only {
						border-radius: 20rpx;
					}

				}

			}

		}

		.info {
			display: flex;
			align-items: center;
			justify-content: space-around;
			font-size: 26rpx;
			color: #333;

			.box {
				display: flex;
				align-items: center;
				padding: 15rpx 0 5rpx;
				flex: 1;
				display: flex;
				justify-content: center;

				.iconfont {
					font-size: 40rpx;
					padding-right: 10rpx;
				}
			}

			.box.active {
				color: #0199FE
			}

		}

	}
</style>