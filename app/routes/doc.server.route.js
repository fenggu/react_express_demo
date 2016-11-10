var express=require('express');
var app=express();
var docController=require('../controllers/doc.server.controller');
 //bodyparser中间件 
var bodyParser = require('body-parser')
var multer = require ( 'multer' )
var storage = multer.diskStorage({
     //设置上传后文件路径，uploads文件夹会自动创建。
        destination: function (req, file, cb) {
            cb(null, './static/user/images')
       }, 
     //给上传文件重命名，获取添加后缀名
      filename: function (req, file, cb) {
          //var fileFormat = (file.originalname).split("."); 
          cb(null, file.originalname);
      } 
});  
var jsonParser = bodyParser.json(); 
app.use(bodyParser()); 
app.use(bodyParser.urlencoded({extended:false}));
// var upload = multer({dest: './static/images/user'});
var upload = multer({
          storage: storage
    });
app.get('/listener',docController.listener) 
app.get('/getlistener',docController.getlistener) 
app.get('/getlist',docController.getList) 
app.post('/gettest',docController.getTest) 
app.get('/test',docController.renderTest) 
app.get('/index',docController.renderHome) 
app.get('/finish',docController.renderDetail) 
app.post('/remtest',docController.RemoveTest) 
app.post('/addtest',docController.CreateTest)
app.post('/adduser',docController.CreateUser)
app.post('/getdetail',docController.GetDetail)
app.post('/uploadfile',upload.fields([
    {name: 'pic'}
]),docController.uploadfile) 
module.exports = app;
