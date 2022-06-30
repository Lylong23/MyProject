const express=require('express')
const app=express()
const port=8080
app.listen(port,()=>{
	console.log('服务器启动成功,端口:'+port)
})
app.use(express.static('./public'))
app.use(express.urlencoded({
	extended:false
}))
const userRouter=require('./router/user.js')
app.use('/v3/user',userRouter)