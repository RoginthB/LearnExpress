const path = require('path');
const express = require('express');
const router =express.Router();

router.get('/form',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','form.html'));
    // res.send("heloo");
})
router.post('/next',(req,res,next)=>{
    res.send(`<h1 class="heading"> Welcome ${req.body.title}</h1>`)
   
})

module.exports =router ;