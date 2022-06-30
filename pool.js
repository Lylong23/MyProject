//引入mysql模块
const mysql=require('mysql')
const pool=mysql.createPool({
	user:'root',
	database:'lvy'
})
module.exports=pool