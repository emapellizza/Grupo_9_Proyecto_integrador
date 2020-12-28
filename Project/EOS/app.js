const express = require('express');
const path = require('path');

const app = express();

app.listen(3000,()=>{ console.log('server ML run')});

app.use(express.static(path.join(__dirname,'./public')));

app.get('/index',(req,res)=> {

  res.sendFile(path.join(__dirname,'./views/index.html'))
});

app.get('/login',(req,res)=> {

    res.sendFile(path.join(__dirname,'./views/login.html'))
  });

  app.get('/register',(req,res)=> {

    res.sendFile(path.join(__dirname,'./views/register.html'))
  });

  app.get('/productCart',(req,res)=> {

    res.sendFile(path.join(__dirname,'./views/productCart.html'))
  });
  app.get('/productDetail',(req,res)=> {

    res.sendFile(path.join(__dirname,'./views/productDetail.html'))
  });