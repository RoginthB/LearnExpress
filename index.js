const express = require('express');
const path = require('path');

const bodyprese =require('body-parser');
const formRoute =require('./router/form_route');
const app= express();

app.use(bodyprese.urlencoded());
app.use(express.static(path.join(__dirname,'public')))
app.use(formRoute);
app.use('/',(req,res)=>{
    res.sendStatus(404).send("home page");
})

const port = 8081;

app.listen(port,()=>{
    console.log("server is runing ");
})
