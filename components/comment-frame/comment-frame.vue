<template>
	<view>
		<view class="commentFrame">
			<!-- suffixIcon:图标 -->
			<uni-easyinput ref="uipt" @confirm="goComment" suffixIcon="paperplane" v-model="replyContent"
				:placeholder="placeholder" @iconClick="goComment">
			</uni-easyinput>
		</view>
	</view>
</template>

<script>
	import {
		store
	} from "@/uni_modules/uni-id-pages/common/store.js"
	import {
		getProvince
	} from "../../utils/tools.js"
	const utilsObj = uniCloud.importObject("utils",{
		customUI:true
	})
	const db = uniCloud.database();
	export default {
		name: "comment-frame",
		props:{
			commentObj:{
				type:Object,
				default:()=>{
					return 
				}
			},
			placeholder:{
				type:String,
				default:"说点什么吧~"
			}
		},
		data() {
			return {
				replyContent:"",
			};
		},
			
		methods:{
			async goComment(){
				if(!this.replyContent){
					uni.showToast({
						title:"评论不能为空",
						icon:"none"
					})
					return
				}
				let province = await getProvince()
				this.$emit("commentEnv",{"comment_content":this.replyContent,
				"province":province,
				"comment_date":Date.now(),
				
				})
				// console.log(this.replyContent);
				db.collection("quanzi_comment").add({
					...this.commentObj,
					"comment_content":this.replyContent,
					"province":province
				}).then(res=>{
					uni.showToast({
						title:"评论成功",
					})
					this.replyContent = null;
					console.log(res);
					utilsObj.operation("quanzi_article","comment_count",this.commentObj.article_id,1)
				})
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.commentFrame {
		width: 100%;
		background: #fff;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 100;
	}
</style>
