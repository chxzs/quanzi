<template>
	<view class="scenic-item" @click="goScenicDetail">
		<view class="pic">
			<image :src="item.picArr[0]" mode=""></image>
		</view>
		<view class="article">
			<view class="title">
				{{item.title}}
			</view>
			<view class="info">
				<text>{{giveName(item)}}</text>
				<text>
					<uni-dateformat :date="item.scenic_date" :threshold="[0,1000*60*60*24*30]"></uni-dateformat>
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {giveName,giveAvatar} from "../../utils/tools.js"
	export default {
		name:"scenic-item",
		props:{
			item:{
				type:Object,
				default(){
					return
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			giveName,giveAvatar,
			goScenicDetail(){
				uni.navigateTo({
					url:"/pagetwo/scenicDetail/scenicDetail?id="+this.item._id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.scenic-item{
	padding: 30rpx;
	display: flex;
	justify-content: space-between;
	.pic{
		margin-right: 15rpx;
		width: 260rpx;
		height: 220rpx;
		border-radius: 20rpx;
		image{
			height: 100%;
			width: 100%;
		}
	}
	.article{
		text-align: justify; //字体样式《实现两端对齐
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		flex: 1;
		.title{
			color: #333;
			font-size: 40rpx;
			display: inline-block;
			  word-break: break-all;
			  text-overflow: ellipsis;
			  display: -webkit-box;
			  -webkit-box-orient: vertical;
			  -webkit-line-clamp: 3; /* 超出几行省略 */
			  overflow: hidden;

		}
		.info{
			font-size: 20rpx;
			color: #888;
			text{
				padding: 15rpx;
			}
		}
	}
}
</style>