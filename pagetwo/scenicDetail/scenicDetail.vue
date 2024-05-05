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
				<view class="title">{{scenicDetailObj.title}}</view>
				<view class="userinfo">
					<view class="avatar">
						<image :src="giveAvatar(scenicDetailObj)" mode="aspectFill"></image>
					</view>
					<view class="text">
						<view class="name">
							{{giveName(scenicDetailObj)}}
						</view>
						<view class="small">
							<text>
								<uni-dateformat :date="scenicDetailObj.publish_date"
									format='yyyy/MM/dd hh:mm:ss'></uni-dateformat>
							</text>· 发布于{{scenicDetailObj.province}}
						</view>
					</view>
				</view>
				<view class="content">
					<!-- <view v-html="data.content"></view> -->
					<u-parse :content="scenicDetailObj.content" :tagStyle="tagStyle"></u-parse>
				</view>

			</view>
		</view>
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
				scenicId: "",
				tagStyle: {
					p: "line-height:1.7em;font-size:16px;padding-bottom:10rpx", //	text-indent: 2em;首行缩进两个汉字
					img: "margin:10rpx 0"
				},
				loadingState:false,
				scenicDetailObj: null
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
			this.scenicId = e.id
			this.getData();
		},
		methods: {
			giveName,
			giveAvatar,
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
				let scTemp = db.collection("quanzi_scenic").where(`_id=="${this.scenicId}"`).getTemp()
				let userTemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp()
				db.collection(scTemp,userTemp).get().then(res=>{
					this.scenicDetailObj = res.result.data[0];
					uni.setNavigationBarTitle({
						title:this.scenicDetailObj.title
					})
					this.loadingState = false;
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

		}
	}
</style>