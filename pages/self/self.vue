<template>
	<view class="user">
		<!-- {{uniIDHasRole('admin')}} -->
		<view class="top">
			<view class="group">
				<view class="userinfo" @click="gouserInfo">
					<view class="pic">
						<image  v-if="hasLogin&&userInfo.avatar_file&&userInfo.avatar_file.url" :src="userInfo.avatar_file.url" mode="aspectFill"></image>
						<image v-else src="../../static/images/user-default.jpg" mode="aspectFill"></image>
					</view>
					<view class="text" v-if="hasLogin">
						<view class="nickname">{{userInfo.nickname||userInfo.username||userInfo.mobile}}</view>
						<view class="year">
							<uni-dateformat :date="userInfo.register_date" :threshold="[3600,99*365*24*60*60*1000]"></uni-dateformat>
							注册</view>
					</view>
					<view class="text" v-else>
						<view class="nickname">点击登录</view>
					</view>
					
				</view>
				
				<view class="more">
					<text class="iconfont icon-a-10-you"></text>
				</view>
			</view>
			
			<view class="bg">				
				<image  v-if="hasLogin&&userInfo.avatar_file&&userInfo.avatar_file.url" :src="userInfo.avatar_file.url" mode="aspectFill"></image>
				<image v-else src="../../static/images/user-default.jpg" mode="aspectFill"></image>
			</view>
		</view>
		
		
		
		<view class="main">
			<view class="info">
				<view class="item"><text>{{lkTotal}}</text>获赞</view>
				<!-- <view class="item"><text>11</text>评论</view> -->
				<view class="item"><text>{{artTotal}}</text>发文</view>
			</view>
			
			<view class="list">
				<view class="group">					
					<view class="item" @click="myArticle">
						<view class="left"><text class="iconfont icon-a-24-bianji"></text><text class="text">我的长文</text></view>
						<view class="right"><text class="iconfont icon-a-10-you"></text></view>
					</view>
					<view class="item" @click="myLike">
						<view class="left"><text class="iconfont icon-a-106-xihuan"></text><text class="text">我的点赞</text></view>
						<view class="right"><text class="iconfont icon-a-10-you"></text></view>
					</view>
					<view class="item">
						<view class="left"><text class="iconfont icon-a-21-xiugai"></text><text class="text">评论过的</text></view>
						<view class="right"><text class="iconfont icon-a-10-you"></text></view>
					</view>
				</view>
				
				<view class="group">
					<view class="item">
						<view class="left"><text class="iconfont icon-a-32-wenjian"></text><text class="text">关于</text></view>
						<view class="right"><text class="iconfont icon-a-10-you"></text></view>
					</view>		
					<view class="item" @click="feedback">
						<view class="left"><text class="iconfont icon-a-5-xinxi"></text><text class="text">意见反馈</text></view>
						<view class="right"><text class="iconfont icon-a-10-you"></text></view> 
					</view>	
				</view>
				
				<view class="group">
					<view class="item" @click="logout">
						<view class="left"><text class="iconfont icon-a-73-tuichu"></text><text class="text">退出登录</text></view>
						<view class="right"><text class="iconfont icon-a-10-you"></text></view>
					</view>					
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import {
		store,
		mutations
	} from '@/uni_modules/uni-id-pages/common/store.js'
	const db = uniCloud.database()
	export default {
		data() {
			return {
				artTotal:0,
				lkTotal:0
			};
		},
		onLoad() {
			this.articleTotal();
			this.likeTotal()
			// let obj = {name:"小明",age:18}
			// // console.log(obj.arr?.length??'不存在');   //问号双问号的用法
			// console.log(obj.arr?.length??[1,2,3]);
		},
		computed:{
			userInfo(){
				return store.userInfo
			},
			hasLogin(){
				return store.hasLogin
			}
		},
		methods:{
			//发过的文章总数统计
			articleTotal(){
				if(!store.hasLogin) return
				db.collection("quanzi_article").where("user_id==$cloudEnv_uid").count().then(res=>{
					this.artTotal = res.result.total
				})
			},
			//获赞统计
			likeTotal(){
				if(!store.hasLogin) return
				db.collection("quanzi_article").where("user_id==$cloudEnv_uid").groupBy("user_id")
				.groupField("sum(like_count) as lkTotal").get().then(res=>{
					this.lkTotal = res.result.data[0].lkTotal
				})
				
			},
			//意见反馈
			feedback(){
				uni.navigateTo({
					url:"/uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback"
				})
			},
			//我的点赞
			myLike(){
				if(this.funLogout()) return
				uni.navigateTo({
					url:"/pagetwo/quanzi_like/list"
				})
			},
			//我发表过的文章
			myArticle(){
				if(this.funLogout()) return
				uni.navigateTo({
					url:"/pagetwo/quanzi_article/list"
				})
			},
			//修改个人资料
			gouserInfo(){
				if(store.hasLogin){
					uni.navigateTo({
						url:"/uni_modules/uni-id-pages/pages/userinfo/userinfo"
					})
				}else{
					let route = this.$mp.page.route //获取当前页面的路由
					uni.navigateTo({
						url:"/uni_modules/uni-id-pages/pages/login/login-withpwd?uniIdRedirectUrl=/"+route
					})
				}
				
			},
			//退出登录
			logout(){
				if(this.funLogout()) return
				uni.showModal({
					title:"是否退出登录",
					success: (res) => {
						console.log(res);
						if(res.confirm){
							mutations.logout()
							
						}
					}
				})
			},
			//退出登录函数
			funLogout(){
				if(!this.hasLogin){
					uni.showToast({
						title:"未登录",
						icon:"error"
					})
					return true
				}
				return false
			}
		}
	}
	
</script>

<style lang="scss">
.user{
	
	.top{
		height: 300rpx;
		background: #bbb;
		padding:0 30rpx;
		padding-top:var(--status-bar-height); //适应微信小程序状态栏
		position: relative;
		display: flex;
		align-items: center;
		.group{
			position: relative;
			z-index: 10;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			color:#fff;
			.userinfo{
				display: flex;
				width: 100%;				
				align-items: center;				
				.pic{
					width: 120rpx;
					height: 120rpx;
					border-radius: 50%;
					overflow: hidden;    //隐藏溢出
					border:2px solid #fff;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.text{
					padding-left:20rpx;
					.nickname{
						font-size: 44rpx;
						font-weight: 600;
					}
					.year{
						font-size: 26rpx;
						opacity: 0.6;
						padding-top:5rpx;
					}
				}
			}
			.more{
				.iconfont{
					font-size: 40rpx;
				}
			}
			
		}
		.bg{
			position: absolute;     //绝对定位
			top: 0;
			left:0;
			width: 100%;
			height: 100%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				filter: blur(20px);    //背景模糊
				transform: scale(2);   //放大2倍
				opacity: 0.5;    //不透明度
			}
		}
	}
	.main{
		width: 100%;
		min-height: 200rpx;
		background: #fff;
		border-radius: 30rpx;
		transform:translateY(-30rpx);  //利用固定轴Y轴 翻转不同度数达到轻盈翻转效果
		padding:30rpx 0;
		.info{
			padding:10rpx 30rpx;
			display: flex;
			font-size: 30rpx;
			.item{
				padding-right: 20rpx;
				color:#888;
				text{
					font-weight: 600;
					color:#333;
				}
			}
		}
		.list{
			.group{
				padding:15rpx 30rpx;
				border-bottom:15rpx solid #f4f4f4;
				.item{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding:25rpx 0;
					font-size: 36rpx;
					color:#555;
					border-bottom:1rpx solid #f8f8f8;
					.left{
						display: flex;
						align-items: center;
						.iconfont{
							font-size: 38rpx;
							margin-right: 10rpx;
						}
					}
					.right{
						.iconfont{
							font-size: 26rpx;
						}
					}
				}
				.item:last-child{
					border: none;
				}
			}
			.group:last-child{
				border: none;
			}
		}
	}
	
}
</style>
