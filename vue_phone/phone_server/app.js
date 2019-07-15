//app.js node.js 服务器
//1:第三方模块 
//  express          web服务器
//  cors             跨域
//  express-session  session
//  body-parser      处理post数据
//  multer           上传文件
//  fs               文件操作(内置)
//  mysql            mysql驱动模块 
//下载指令:联网 
//npm i express-session body-parser //multer mysql express cors
//1:引入二个模块  express mysql
const express = require("express");
const mysql = require("mysql");
const cors=require("cors");
const bodyParser=require("body-parser");
//2:创建连结池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  port:3306,
  database:"app",
  connectionLimit:15
});
//3:创建express对象
var server = express();
//4.指定一个静态的目录
server.use(express.static("public"))

//5.允许3001的脚手架访问端口为3000的服务器
server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}));
//6添加session
const session=require("express-session");
server.use(session({
  secret:"128位字符串",
  resave:true,  //每次请求是否更新数据
  saveUninitialized:true  //保存初始化数据
}));
//9:绑定监听端口
server.listen(3000);
//10：接收用户登录请求
// 引用bodyparser 中间件
server.use(bodyParser.urlencoded({
  extended:false
}));
server.post("/login",(req,res)=>{
   //1:接收脚手架参数 uname upass
   var utel= req.body.utel;
   var upass = req.body.upass;
   var sql =" SELECT id FROM reged where utel=? and upass=?";
   pool.query(sql,[utel,upass],(err,result)=>{
      console.log(result)
     if(err)throw err;
     if(result.length==0){
       res.send({code:-1,msg:"用户名或密码有误"});
     }else{
      //  res.send(result);
       
      req.session.uid=result[0].id; 
       //登录成功将用户id保存到session对象的uid中
      //  console.log(result[1].id);
      // var uid=req.session.uid
      
      // console.log(req.session.uid)
      // console.log(result[0].uid)
    
      res.send(result)
      // res.send(result[0].id)
    //  res.send({code:1,msg:"登录成功"});
     return;
     }
   });
});

//功能2 商品列表
server.get("/product",(req,res)=>{
  // req.query.pno接到前台传来的参数，用变量保存
  // var pno=req.query.pno;
  // var ps=req.query.pageSize; 
  var fid=req.query.selected;
  // console.log(fid)
  //默认值
  // if(!pno){pno=1}
  // if(!ps){ps=4}
  //2.sql where fid=?     更具fid查找数据种类
  var sql="select* from product where fid=?"
  // var offset=(pno-1)*ps;
  // ps=parseInt(ps);
  //3.json
  pool.query(sql,[fid],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
    // console.log(result)
  })
})
// 模糊查询
server.get("/search",(req,res)=>{
 
  var name=req.query.searchContent;
  console.log(name)
  // LIKE'Mc%' 
  // SELECT * FROM [user] WHERE u_name LIKE '%三%'
  var sql=`select* from product where name like '${name}%'`
  
  pool.query(sql,[name],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
    console.log(result)
    
  })
})














// 查找跳转页商品信息
 server.get("/pro",(req,res)=>{
  var jid=req.query.jid;
  // console.log(jid)
  if(!jid){
     res.send("jid不存在")  
  }
   var sql="select name,title,price,count,img,id from product where jid=?"
   pool.query(sql,[jid],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
    res.send({code:1,msg:"查询成功",data:result});
    // console.log(result)
  }
   
})
})

// 商品详情页
server.get("/detail",(req,res)=>{
  var obj={
     product:{},
     details:[]
  }
  var id=req.query.id;
  var sql="select id,title,price,count,money,img from product where id=?"
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      // console.log(result)
      // res.send(result)
      // res.send(result[0])
      // res.send({code:1,msg:"查询成功",data:result});
       obj.product=result[0];
      //  console.log(obj.product)
       var id= obj.product.id
      var sql="select img from details where id=?"
    pool.query(sql,[id],(err,result)=>{
      if(err) throw err;
      if(result.length>0){
        // result;
        obj.details=result;
        // console.log(obj.details);
         }
        //  console.log(obj)
         res.send(obj)
    })
    }
     
  })
  })


// 计算商品价格
// 一旦商品添加成功后只更新商品数量，其他信息不再更新
server.get("/cart",(req,res)=>{
  var uid = req.query.uid;
  // console.log(uid)
  var pid=req.query.pid;
  var addcount=req.query.a;
  var price=req.query.price;
  var title=req.query.title;
  var img=req.query.img;
  // console.log(req.query)
  var sql=`SELECT * from addcart where uid=? and pid=?`;
  pool.query(sql,[uid,pid],(err,result)=>{
      if(err) throw err;
       if(result.length>0){
        //  res.send(result);
        //  console.log(result)
       //将现在的数量找出来,加上新来的数量
         var counts=result[0].addcount;
         addcount=Number(counts)+Number(addcount);
         //如果有,直接更新数量
         var sql1=`UPDATE addcart SET addcount=?
         where uid=? and pid=?`
         pool.query(sql1,[addcount,uid,pid],(err,result)=>{
              if(err) throw err;  
             if(result.affectedRows>0){
              res.send({code:1,msg:"查询成功",data:result})
              //  res.send({code:1,msg:"加入购物车成功"})
              
              }
         })
       }else{
           //否则将数量插入
          //  console.log(result)
           var sql2=`insert into addcart set uid=?,pid=?,addcount=?,price=?,title=?,img=?`;
           pool.query(sql2,[uid,pid,addcount,price,title,img],(err,result)=>{
               if(err) throw err;
               if(result.affectedRows>0){
                //  console.log(result)
                // res.send({code:1,msg:"查询成功"})
                res.send(result)
               
                  // res.send({code:1,msg:"加入购物车成功"})
                  // console.log(result)
              }else{
                   res.send({code:1,msg:"加入购物车失败"})
                  
               }
           })
       }
       
  })
})

// 获取用户id查询用户购买的商品
server.get("/selectCart",(req,res)=>{
  //参数
  var uid = req.query.uid;
  // console.log(uid)
  // sqlid,img,uid,price,count 
  var sql = "SELECT* FROM addcart where uid = ?";
  pool.query(sql,[uid],(err,result)=>{
    // console.log(result)
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  });

})

//功能四:-删除指定购物车中一个商品
server.get("/del",(req,res)=>{
  //参数:id
  var id = req.query.pid;
  console.log(id)
  //sql:
  var sql = "DELETE FROM addcart WHERE id = ?";
  //json
  pool.query(sql,[id],(err,result)=>{
     if(err)throw err;
     console.log(result);
     res.send({code:1,msg:"删除成功"})
  })
})

// 订单页商品信息
server.get("/order",(req,res)=>{
  var id = req.query.ids;
  console.log(id)
  // 查询已选中的商品id
  var sql = `select* FROM addcart WHERE id IN(${id})`;
  pool.query(sql,(err,result)=>{
    // console.log(result)
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  });

})

// 插入用户地址信息
// server.get("/address",(req,res)=>{
//   //参数
//   var uid = req.query.uid;
//   var
//   // console.log(uid)
//   // sqlid,img,uid,price,count 
//   var sql = "insert into addcart set uid=?,pid=?,addcount=?,price=?,title=?,img=?`";
//   pool.query(sql,[uid],(err,result)=>{
//     // console.log(result)
//     if(err)throw err;
//     res.send({code:1,msg:"查询成功",data:result})
//   });

// })
