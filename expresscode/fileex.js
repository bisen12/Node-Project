const express=require('express')
const path = require('path')
const app = express()
const port =4008



app.get('/hello/:name',(req,res)=>{
    res.send('hello mr vishal'+ req.params.name)
})
app.get('/',(req,res)=>{
    res.send('hello mr vishal')
})

app.listen(port,()=>{
    console.log(`app listening on port http://${port}`)
})