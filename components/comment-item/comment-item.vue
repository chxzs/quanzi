<template>
	<view>
		<view class="comment-item" @click="goReply">
			<view class="avatar">
				<u-avatar :src="giveAvatar(item)" size="26"></u-avatar>
			</view>
			<view class="wrap">
				<view class="username">
					<view style="display: flex; justify-content: center; align-items: center;">
						<view>{{giveName(item)}}</view>
						<view v-if="item.user_id[0].role[0] == 'webmaster' || item.user_id[0].role[0] == 'admin'"
							style=" margin-left: 20rpx; font-size: 24rpx; font-weight: 600; width: 80rpx; color: #fff; height: 35rpx; border-radius: 12rpx; display: flex; justify-content: center; align-items: center; background-color: #fcd372;">
							老师</view>
					</view>
					<!-- click.stop 点击事件的冒泡，点击事件不会被其他事件所覆盖 -->
					<view v-if="!closeBtn" class="iconfont icon-a-43-guanbi" @click.stop="removeComment"></view>
				</view>
				<view class="comment-content">{{item.comment_content}}</view>
				<view class="info">
					<view class="reply-btn" v-if="!childbool">{{count}}回复 </view>
					<view>
						<uni-dateformat :date="item.comment_date" :threshold="[60000,3600000*24*30]">
						</uni-dateformat>
					</view>
					<view>{{item.province}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		giveName,
		giveAvatar
	} from "../../utils/tools.js";
	const utilsObj = uniCloud.importObject("utils", {
		customUI: true
	});
	const db = uniCloud.database();
	export default {
		name: "comment-item",
		props: {
			item: {
				type: Object,
				default: () => {
					return
				}
			},
			childbool: {
				type: Boolean,
				default: false
			},
			closeBtn: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				count: this.get()
			};
		},
		methods: {
			giveName,
			giveAvatar,
			//获取回复评论总数
			get() {
				let commentTemp = db.collection("quanzi_comment")
					.where(
						`article_id =="${this.item.article_id}"&&comment_type==1&&reply_comment_id=="${this.item._id}"`
						).orderBy("comment_date desc")
					.limit(20).getTemp();
				let userTemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp();
				db.collection(commentTemp, userTemp).get({
					getCount: true
				}).then(res => {
					// console.log("wthis",res);
					this.count = res.result.count
				});

			},
			//跳转评论详情页
			goReply() {
				if (this.childbool) return
				uni.setStorageSync("replyData", this.item)
				uni.navigateTo({
					url: "/pages/reply/reply"
					// url:"/pages/reply/reply?item="+JSON.stringify(this.item)
				})
			},
			//删除评论
			removeComment() {
				let uid = uniCloud.getCurrentUserInfo().uid;
				if (this.uniIDHasRole('webmaster') || this.uniIDHasRole('admin') || this.item.user_id[0]._id == uid) {
					uni.showModal({
						title: "是否确认删除",
						success: (res) => {
							if (res.confirm) {
								this.rmFun()
							}
						}
					})
				} else {
					uni.showToast({
						title: "权限不够",
						icon: "error"
					})
				}
			},

			rmFun() {
				this.$emit("rmcomment", this.item._id)
				db.collection("quanzi_comment").doc(this.item._id).remove().then(res => {
					uni.showToast({
						title: "删除成功"
					})
					utilsObj.operation("quanzi_article", "comment_count", this.item.article_id, -1)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comment-item {
		display: flex;

		.wrap {
			flex: 1;
			padding-left: 20rpx;
			padding-bottom: 20rpx;

			.username {
				font-size: 26rpx;
				color: #666;
				padding: 10rpx 0;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.iconfont {
					font-size: 20rpx;
					padding: 10rpx;
					color: #999;
				}
			}

			.comment-content {
				font-size: 34rpx;
				color: #111;
				line-height: 1.8em;
			}

			.info {
				font-size: 26rpx;
				color: #666;
				display: flex;
				padding: 10rpx 0;
				align-items: center;

				view {
					margin-right: 25rpx;
				}

				.reply-btn {
					padding: 6rpx 18rpx;
					background: #e4e4e4;
					border-radius: 30rpx;
				}
			}
		}
	}
</style>