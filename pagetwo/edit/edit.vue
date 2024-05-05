<template>
	<view class="edit">
		<view class="title">
			<input type="text" placeholder="请输入完整的标题" v-model="artObj.title" placeholder-class="placeholder-class">
		</view>
		<view class="content">
			<editor class="myEdit" placeholder="写点什么吧~~"
			show-img-size
			show-img-toolbar 
			show-img-resize 
			@ready ="onEditorReady"
			@focus="onFocus"
			@statuschange="onStatuschange"
			></editor>
		</view>
		<view class="btnGroup">
			<u-button type="primary" text="确定发布" @click="onSubmit" :disabled="!artObj.title.length"></u-button>
		</view>
		<view class="tools" v-show="toolShow">
			<view class="item" @click="clickHead" >
				<text class="iconfont icon-zitibiaoti" :class="headShow ? 'active':''"></text>
			</view>
			<view class="item" @click="clickBold">
				<text class="iconfont icon-zitijiacu" :class="boldShow ? 'active':''"></text>
			</view>
			<view class="item" @click="clickItalic">
				<text class="iconfont icon-zitixieti" :class="italicShow ? 'active':''"></text>
			</view>
			<view class="item" @click="clickDivider"><text class="iconfont icon-fengexian"></text> </view>
			<view class="item" @click="clickInsertImage"><text class="iconfont icon-charutupian"></text> </view>
			<view class="item" @click="editOK"><text class="iconfont icon-duigou_kuai"></text> </view>
		</view>
	</view>
</template>

<script>
	import {getImgSrc,getProvince} from '@/utils/tools.js'
	const db = uniCloud.database()
	export default {
		data() {
			return {
				toolShow:true,
				headShow:false,
				boldShow:false,
				italicShow:false,
				page:null,
				// picArr:[]
				artObj:{
					title:"",
					content:"",
					description:"",
					picArr:"",
					province:""
				}
			};
		},
		onLoad(e) {
			this.page = e.page
				getProvince().then(res=>{
					this.artObj.province = res
					console.log(this.artObj.province);
				})
		},
		methods:{
			//确认发布，获取内容
			onSubmit(){
				
				this.editorCtx.getContents({
					success:res=>{
						this.artObj.description = res.text.slice(0,80);
						this.artObj.content = res.html;
						this.artObj.picArr = getImgSrc(res.html);
						console.log(this.artObj);
						uni.showLoading({
							title:"发布中...",
							mask:true
						})
						this.addData()
						
					}
				})
		},
			//添加数据
			addData(){
				if(this.page==1){
					db.collection("quanzi_article").add({...this.artObj}).then(res=>{
						console.log(res);
						uni.hideLoading();
						uni.showToast({
							title:"发布成功"
						}),
						setTimeout(()=>{
							uni.reLaunch({
								url:"/pages/index/index"
							})
						},800)
					})
				}else if(this.page==2){
					db.collection("quanzi_scenic").add({...this.artObj}).then(res=>{
						console.log(res);
						uni.hideLoading();
						uni.showToast({
							title:"发布成功"
						}),
						setTimeout(()=>{
							uni.reLaunch({
								url:"/pages/index/index"
							})
						},800)
					})
				}
				
			},
			//插入图片
			clickInsertImage(){
				uni.chooseImage({
					
					 success: (res) => {
						 
						 uni.showLoading({
						 	title:"上传中请稍后",
						 	mask:true
						 })
						// console.log(res.tempFiles);
						// let picArr = res.tempFiles.map(async item => {
						// 	return await item.path
						// })
						// console.log(picArr);
						
						res.tempFiles.forEach(item=>{
							let suffix = item.path.substring(item.path.lastIndexOf("."));   //获取文件后缀名
							let randomName = Date.now() + "" + String(Math.random()).substring(3,6) + suffix 
							uniCloud.uploadFile({
								filePath:item.path,
								cloudPath:item.name || randomName
							}).then(res=>{
								this.editorCtx.insertImage({
									src:res.fileID
								})
								uni.hideLoading()
							})
						})
					}
				})
			},
			//完成关闭工具条
			editOK(){
				this.toolShow = false
			},
			//字体倾斜
			clickItalic(){
				this.italicShow = !this.italicShow
				this.editorCtx.format("italic")
			},
			//字体加粗
			clickBold(){
				this.boldShow = !this.boldShow
				this.editorCtx.format("bold")
			},
			//添加大标题
			clickHead(){
				this.headShow = !this.headShow
				this.editorCtx.format("header",this.headShow ? 'H2':false)
			},
			//增加分割线
			clickDivider(){
				this.editorCtx.insertDivider()
			},
			//初始化
			onEditorReady(){
				uni.createSelectorQuery().in(this).select('.myEdit').fields({ //selectorQuery.in(component) 将选择器的选取范围更改为自定义组件 component 内，返回一个 SelectorQuery 对象实例。
					size:true,
					context:true
				},res=>{
					this.editorCtx = res.context
					console.log(res);
				}).exec()
			},
			//获取焦点
			onFocus(){
				this.toolShow = true
			},
			checkStatus(name, detail, obj) {
				if (detail.hasOwnProperty(name)) {
					this[obj] = true;					
				} else {
					this[obj] = false;
				}
			},
			// 当样式发生变化
			onStatuschange(e){
				console.log(e);
				let detail = e.detail
				this.checkStatus("header",detail,"headShow")
				this.checkStatus("bold",detail,"boldShow")
				this.checkStatus("italic",detail,"italicShow")
			}
		}
	}
</script>

<style lang="scss">
	/deep/ .ql-blank::before {
		color: #e0e0e0;
		font-style: normal;
	}

	.edit {

		.title {
			input {
				height: 120rpx;
				font-size: 46rpx;
				border-bottom: 1px solid #e4e4e4;
				margin-bottom: 30rpx;
				color: black;
			}

			.placeholderClass {
				color: #e0e0e0;
			}
		}

		.content {
			.myEdit {
				height: calc(100vh - 500rpx); //全屏高度减去500rpx
				margin-bottom: 30rpx;
				border-bottom: 1rpx solid black;
			}
		}

		.tools {
			width: 100%;
			height: 80rpx;
			background: #fff;
			border-top: 1rpx solid #f4f4f4; //上边框
			position: fixed;
			left: 0;
			bottom: 0;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.iconfont {
				font-size: 36rpx;
				color: #333;

				&.active {
					color: #0199FE
				}
			}
		}
	}
</style>