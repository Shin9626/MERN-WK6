var express = require('express'),
    app=express(),
    path=require('path');

var port=process.env.PORT || 3000;

app.use('/assets',express.static(__dirname+'/public'));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use('/', function(req,res,next){
    console.log('Request Url:' + req.url);
    next();
});

app.get('/',function(req,res){
    res.render('index');
});

app.get('/index.html',function(req,res){
    res.render('index');
});

app.get('/intro.html',function(req,res){
    res.render('intro');
});

app.get('/blog.html',function(req,res){
    res.render('blog');
});

app.get('/share.html',function(req,res){
    res.render('share');
});

app.get('/contact.html',function(req,res){
    res.render('contact');
});

app.listen(port);