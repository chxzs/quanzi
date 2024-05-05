//获取富文本内的图片url地址
export function getImgSrc(richtext,num=3) {
	let imgList = [];
	richtext.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g, (match, capture) => {
		  imgList.push(capture);
	});
	imgList=imgList.slice(0,num)
	return imgList;
}

//获取ip地址
export function getProvince(){
		let historyProvince = uni.getStorageSync("historyProvince")
		return new Promise((resolve,reject)=>{
			if(historyProvince){
				// console.log("走了缓存逻辑");
				if(Date.now()-historyProvince.time > 1000*60*60){
					// console.log("时间大于一小时，重新获取ip地址");
					getIp().then(res=>{
						resolve(res)
					}).catch(err=>{
						reject(err)
					})
				}else{
					// console.log("直接从缓存读取");
					resolve(historyProvince.province)
				}
			}else{
				// console.log("直接读取ip地址");
				getIp().then(res=>{
					resolve(res)
				}).catch(err=>{
					reject(err)
				})
			}
		})
		
		
	
	
}
//获取ip地址数据
function getIp(){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:"https://restapi.amap.com/v3/ip?key=4203ac67cc4301424e31238fbffa0ddc",
			success: res=>{
				let str = res.data.province
				let obj = {
					province:str,
					time:Date.now()
				}
				uni.setStorageSync("historyProvince",obj)
				resolve(obj.province)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
	
}
//获取名称
export function giveName(item){
	return item.user_id[0].nickname || item.user_id[0].username || item.user_id[0].mobile || "请设置名称"
}

//获取头像
export function giveAvatar(item){
	return  item.user_id[0]?.avatar_file?.url ?? '../../static/images/user-default.jpg'
}


const db = uniCloud.database();
const utilsObj = uniCloud.importObject("utils", {
	customUI: true ,// 取消自动展示的交互提示界面
	});
//点赞函数
export async function likeFun(artid){
	let count = await db.collection("quanzi_like")
	.where(`article_id=="${artid}" && user_id==$cloudEnv_uid`).count()
	console.log(count);
	// const artTemp = db.collection("quanzi_article").getTemp();
	// const likeTemp = db.collection("quanzi_like").getTemp();    //表的关联系，要懂 主副表的关联关系 主表要只有一个
	// db.collection(likeTemp,artTemp).get().then(res=>{
	// 	console.log(res);
	// })
	if(count.result.total){
		db.collection("quanzi_like")
		.where(`article_id=="${artid}" && user_id==$cloudEnv_uid`).remove()
		utilsObj.operation("quanzi_article","like_count",artid,-1)
		
	}else{
		db.collection("quanzi_like").add({
			article_id:artid,
		})
		utilsObj.operation("quanzi_article","like_count",artid,1)
	}
}