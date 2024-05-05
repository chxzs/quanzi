const db = uniCloud.database()
const dbCmd = db.command
module.exports = {
	_before: function () { // 通用预处理器

	},
	/**
	 * method1方法描述
	 * @param {string} table 数据表
	 * @param {string} attr 属性名
	 * @param {string} id 
	 * @param {string} num 1自增 -1自减
	 */
	async operation(table,attr,id,num){
		let obj = {}
		obj[attr] = dbCmd.inc(num)
		return await db.collection(table).doc(id).update(obj)
	}
}
