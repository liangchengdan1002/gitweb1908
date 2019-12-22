// *******引入第三方模块
//express           web服务器
//mysql             mysql驱动
//express-session   会话对象
//cors              跨域
const express = require("express");
const session = require("express-session");
const mysql = require("mysql");
const cors = require("cors");
// ********创建数据库连接池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  port:3306,
  connectionLimit:15,
  database:"team"
})
//4:创建web服务器
var server = express();
//5:配置跨域
//允许跨域程序端口
server.use(cors({
    //允许哪个程序列表 脚手架
    origin:["http://127.0.0.1:8080",
    "http://localhost:8080"],
    //每次请求验证
    credentials:true,
}));
//6:配置session对象
server.use(session({
   secret:"128位安全字符串",//加密条件
   resave:true,            //请求更新数据
   saveUninitialized:true  //保存初始化数据
}))
//7:指定静态目录  public
server.use(express.static("public")); 
//8:启动监听端口  4000
server.listen(4000);

// 功能一：完成用户登录
server.get("/login",(req,res)=>{
  var phone = req.query.phone;
  var upwd = req.query.upwd;
  var img = req.query.image;
  var sql = "SELECT id FROM team_login WHERE phone=? AND upwd=?";
  pool.query(sql,[phone,upwd],(err,result)=>{
    if(err)throw err;
    if(result.length == 0){
      res.send({code:-1,msg:"用户名或密码有误"})
    }else{
      req.session.uid = result[0].id;
      res.send({code:1,msg:"登录成功"});
    }
  })
})