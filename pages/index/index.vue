<template>
	<view class="home">
		<view class="topnav">
			<u-tabs :list="navList" @click="clickNav" :activeStyle="{
				color: '#333',
				fontWeight: 'bold',
				transform: 'scale(1.08)'
			}" :inactiveStyle="{
				color: '#888',
				transform: 'scale(1)'
			}"></u-tabs>
		</view>
		<view class="loadingState" v-if="loadState">
			<u-skeleton rows="10" title loading></u-skeleton>
		</view>
		<view class="content" v-else>
			<view class="item" v-for="item in dataList">
				<blog-item :item="item" @delEvent="P_delEvent" :like_count.sync="item.like_count"></blog-item>
			</view>
		</view>
		<view class="edit" @click="goEdit">
			<text class="iconfont icon-a-21-xiugai"></text>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				navList: [{
						name: "最新",
						type:"publish_date"
					},
					{
						name: "热门",
						type:"view_count"
					}
				],
				navIndex:0,
				loadState: false,
				dataList: []
			}
		},
		onLoad() {
			this.loadState = true;
			this.getData()
		},
		onReachBottom() {
			this.getData()
		},
		methods: {
			//删除数据刷新页面
			P_delEvent(){
				this.dataList=[];
				this.getData()
			},
			//获取数据
			getData() {
				let artTemp = db.collection("quanzi_article").where('delState!=true').field(
						"user_id,view_count,like_count,comment_count,publish_date,title,picArr,description")
					.getTemp();
				let userTemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp();
				db.collection(artTemp, userTemp).orderBy(this.navList[this.navIndex].type ,"desc")
				.skip(this.dataList.length).limit(5).get().then(res => {
					// console.log(res);
					let oldArr=this.dataList
					this.dataList = [...oldArr,...res.result.data];
					// console.log(this.dataList);
					this.loadState = false
				})
			},
			clickNav(e){
				this.loadState = true;
				this.navIndex = e.index;
				this.getData()
			},
			//跳转到发布页面
			goEdit(){
				uni.navigateTo({
					url: "/pagetwo/edit/edit?page="+1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		.topnav {
			margin-bottom: 30rpx;
		}

		.loadingState {
			padding: 30rpx;
		}

		.content {
			padding: 30rpx;
		}

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