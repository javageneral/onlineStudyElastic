var models = require('./db');
var express = require('express');
var querystring = require('querystring');
var router = express.Router();
var mysql = require('mysql');

var conn = mysql.createConnection(models.mysql);
	conn.connect();

//用户添加自己的信息
router.post("/api/addmessage",function(req,res){
	// req.on('data',function(data){
		// var obj = querystring.parse(data.toString());//序列化
		// console.log(obj);
		// pool.getConnection(function(err,connection){
		// 	if (err) {console.log("与数据库建立连接失败");}
		// 	else {

	var str = 'INSERT INTO personalmessage VALUES("' + req.body.id + '","' + req.body.name +'","' + req.body.sex + '","'+
		req.body.tel + '","' + req.body.work +'","' + req.body.workAddress + '","' + req.body.sign + '","' + req.body.eat +
		'");' ;
        console.log(str);
		conn.query(str,function(err,result){
			if (err) {console.log(err);}
			else{
				console.log("添加成功");
				//console.log(result);
				//conn.end();
				}
			})
	//  })
});
//用户管理
router.get('/api/userManage',function(req,res){
	var str = 'select *from userregister';
	conn.query(str,function(err,result){
		if (err) {
			console.log(err);
		}else{
			console.log("查询成功");
			console.log(result);
			res.send(result);
			//conn.end();
		}
	})
});

//库管理
router.get('/api/library',function(req,res){
	var str = 'select *from library';
	conn.query(str,function(err,result){
		if (err) {
			console.log(err);
		}else{
			console.log("查询成功");
			console.log(result);
			res.send(result);
			//conn.end();
		}
	})
});

//新增库
router.post('/api/addLibrary',function(req,res){
	var str = 'INSERT INTO library(libraryName) VALUES("' + req.body.libraryName+'")';
	conn.query(str,function(err,result){
		if (err) {
			console.log(err);
			res.send("110");
		}else{
			console.log(result);
			res.send("1");
			//conn.end();
		}
	})
});
//修改库
router.post('/api/updateLibrary',function(req,res){
	var str = 'update library set libraryName = "' + req.body.libraryName 
	        +'" where libraryName = "' + req.body.oldName +'"';
	conn.query(str,function(err,result){
		if (err) {
			console.log(err);
			res.send("110");
		}else{
			console.log(result);
			res.send("1");
			//conn.end();
		}
	})
});
//删除库
router.post('/api/deleteLibrary',function(req,res){
	var str = 'delete from library where libraryName = "' + req.body.libraryName +'"';
	conn.query(str,function(err,result){
		if (err) {
			console.log(err);
			res.send("110");
		}else{
			console.log(result);
			res.send("1");
			//conn.end();
		}
	})
});
//获取录像管理的导航标签
router.get('/api/vedioTabs',function(req,res){
	var str = 'select *from library';
	conn.query(str,function(err,result){
		if (err) {
			console.log(err);
			res.send("110");
		}else{
			//console.log(result);
			res.send(result);
			//conn.end();
		}
	})
});
//获取录像列表
router.get('/api/vedioList',function(req,res){
	var str = 'select *from vedioList';
	conn.query(str,function(err,result){
		if (err) {
			console.log(err);
			res.send("110");
		}else{
			//console.log(result);
			res.send(result);
			//conn.end();
		}
	})
});

//管理员登录
router.post('/api/login',function(req,res){
	var uname = req.body.username;
	var pwd = req.body.password;
	var str = 'select password from root where username ="' +  uname + '";';
	conn.query(str,function(err,result){
		if (err) {console.log(err);}
		else{
			//console.log(result[0].password);
			if (result[0].password == pwd) {
				res.send('1');
			}else{
				res.send('110');
			}
		}
	})
})

//用户登录
router.post('/api/userLogin',function(req,res){
	var uname = req.body.username;
	var pwd = req.body.password;
	var str = 'select password from userRegister where phoneNum ="' +  uname + '";';
	conn.query(str,function(err,result){
		if (err) {console.log(err);}
		else{
			//console.log(pwd);
			if (result[0].password == pwd) {
				res.send('1');
			}else{
				res.send('110');
			}
		}
	})
});

//用户注册
router.post('/api/register',function(req,res){
	var str = 'INSERT INTO useregister VALUES("' + req.body.phoneNum 
	        + '","' + req.body.name + '","' + req.body.password + '");';
     	conn.query(str,function(err,result){
		if(err){
			console.log(err);
			res.send("110");
		}else{
			console.log("注册成功");
			console.log(result);
			res.send("1");
		}
	})
})

module.exports = router;
