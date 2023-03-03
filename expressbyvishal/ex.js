const express = require('express');
const app =express();

app.get('/',(req,res)=>{
    res.setEncoding("welcome mr vishal");
});

app.listen(4000, ()=>{
    console.log("listening to port 4000");
});