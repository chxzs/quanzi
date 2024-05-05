<template>
	<view class="reply">
		<view class="top">
			<comment-item :item="replyItem" :childbool="true" :closeBtn="true"></comment-item>
		</view>
		<view class="list">
			<view class="row"  v-for="item in commentList">
				<comment-item :childbool="true" @rmcomment="PcommentEnv" :item="item"></comment-item>
			</view>
		</view>
		<view>
			<comment-frame :placeholder="`回复:${giveName(this.replyItem)}`"
			:commentObj="replyCommentObj" @commentEnv="PcommentEnv"></comment-frame>
		</view>
	</view>
</template>

<script>
	import {
		giveName,
		giveAvatar
	} from "../../utils/tools.js";
	const db = uniCloud.database();
	
	export default {
		data() {
			return {
				replyItem:null,
				replyCommentObj:{
					article_id:"",
					comment_type:1,
					reply_user_id:"",
					reply_comment_id:""
				},
				commentList:null
			};
		},
		onLoad(){
			this.replyItem = uni.getStorageSync("replyData")||{}
			console.log(this.replyItem._id);
			if(!this.replyItem){
				return uni.navigateBack()
			}
			this.replyCommentObj.article_id=this.replyItem.article_id,
			this.replyCommentObj.reply_user_id=this.replyItem.user_id[0]._id,
			this.replyCommentObj.reply_comment_id=this.replyItem._id
			// let item = JSON.parse(e.item);
			// this.item = item
			// this.getComment1()
			this.get()
			this.getComment()
		},
		onUnload() {
			uni.removeStorageSync("replyData")			
		},
		methods:{
			giveName,
			giveAvatar,
		
			//刷新评论
			PcommentEnv(){
				this.commentList=[],
				this.getComment()
			},
			//获取评论,逻辑自己写的，搞清楚逻辑，多看看容易忘
			getComment(){
				 let commentTemp = db.collection("quanzi_comment")
				 .where(`article_id =="${this.replyItem.article_id}"&&comment_type==1&&reply_comment_id=="${this.replyItem._id}"`).orderBy("comment_date desc")
				 .limit(20).getTemp();
				 let userTemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp();
				 db.collection(commentTemp,userTemp).get().then(res=>{
					 this.commentList = res.result.data
					 console.log(this.commentList);
				 })
			},
			get(){
				 let commentTemp = db.collection("quanzi_comment")
				 .where(`article_id =="${this.replyItem.article_id}"&&comment_type==1&&reply_comment_id=="${this.replyItem._id}"`).orderBy("comment_date desc")
				 .limit(20).getTemp();
				 let userTemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp();
				 db.collection(commentTemp,userTemp).get({
									  getCount:true
									}).then(res=>{
					 console.log(res.result.count);
				 });
				
			},
		}
	}
</script>

<style lang="scss">
.reply{
	.top{
		padding: 30rpx;
		border-bottom: 15rpx solid #eee;
	}
	.list{
		padding: 30rpx;
		padding-bottom: 120rpx;
		.row{
			padding-bottom: 15rpx;
		}
	}
}

</style>
