<template>
	<view class="scenic">
		<view class="content" >
			<view class="item" v-for="item in scenicList">
				<scenic-item :item="item"></scenic-item>
			</view>
		</view>
		<view class="edit" @click="goEdit">
			<text class="iconfont icon-a-21-xiugai"></text>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database();
	export default {
		data() {
			return {
				scenicList:null
			};
		},
		onLoad() {
			this.getScenicData()
		},
		methods:{
			goEdit(){
				uni.navigateTo({
					url: "/pagetwo/edit/edit?page="+2
				})
			},
			getScenicData(){
				let scenicTemp = db.collection("quanzi_scenic").getTemp()
				let userTemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp()
				db.collection(scenicTemp,userTemp).get().then(res=>{
					this.scenicList = res.result.data
					console.log(this.scenicList);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.scenic{
	.edit {
		width: 120rpx;
		height: 120rpx;
		background: #0199FE;
		border-radius: 50%;
		color: #fff;
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		right: 50rpx;
		bottom: 150rpx;
		box-shadow: 0 0 20rpx rgba(1, 153, 254, 0.8);
	
		/* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
		.iconfont {
			font-size: 50rpx;
		}
	}
}
</style>
