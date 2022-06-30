const  express=require('express')
const pool=require('../pool.js')
const router=express.Router()
module.exports=router
//简单写一个接口测试通不通
//http://127.0.0.1:8080/v3/user/show
router.get('/show',(req,res)=>{
	res.send('hello')
})
//1.声明当前路由器下的接口:检查用户名是否存在
//GET /check 
//参数:uname=XXX
//返回数据:exists或non-exists
//测试地址:http://127.0.0.1:8080/v3/user/check?uname=XXX
router.get('/check',(req,res)=>{
	var n=req.query.uname
	var sql='select uid  from  lvy_user where uname=?'
	pool.query(sql,[n],(err,result)=>{
		if(err){throw err}
		if(result.length>0){
			res.send('exists')
		}else{
			res.send('no-exists')
		}
	})
})

//注册接口
//接口信息:	POST   /add
//返回数据{"code":200,"msg":"注册成功!"}
//http://127.0.0.1:8080/v3/user/add
router.post('/add',(req,res)=>{
	let  uname1=req.body.uname
	let  upwd1=req.body.upwd
	let  phone1=req.body.phone
	
	
	if(!uname1){
		res.send('{"code":201,"msg":"用户不能为空!"}')
		return
		}
	if(!upwd1){
			res.send('{"code":201,"msg":"密码不能为空!"}')
			return
			}
	if(!phone1){
			res.send('{"code":201,"msg":"手机号不能为空!"}')
			return
			}
	
	
		let sql='insert  into lvy_user(uname,upwd,phone) values(?,?,?)'
		pool.query(sql,[uname1,upwd1,phone1],(err,result)=>{
			if(err){throw err}
			res.send({code:200,msg:"注册成功!"})
		})
})

//创建接口:使用用户名与密码登录
//GET /login 参数:uname=XXX&upwd=XXX
//返回数据:login success 或 login fail
//测试地址:http://127.0.0.1:8080/v3/user/login?uname=XXX&upwd=XXX
//提示:select uid from  lvy_user where uname=? and upwd=?
router.get('/login',(req,res)=>{
	//获取查询字符串中的参数
	var uname = req.query.uname
	var upwd = req.query.upwd
	
	//准备SQL,连接数据库连接池,准备查询
	var sql = 'select uid from lvy_user where uname=? and upwd=?'
	pool.query(sql,[uname,upwd],(err,result)=>{
		if(err) throw err
		if(result.length>0){
			res.send('登录成功!')
		}else{
			res.send('登录失败!')
		}	
	})	
})