const express=require('express')
const path = require('path')
const app = express()
const port =4006

app.get('/',(req,res)=>{
    res.send('hello mr vishal')
})
app.get('/vishal',(req,res)=>{
    res.send('hello mr vishal bisen')
})
app.get('/about', (req, res) => {
    res.send('about')
  })
  app.get('/random', (req, res) => {
   // res.send('C:/Users/vshlb/OneDrive/Desktop/node-js/expresscode/in.html')
     //res.sendFile(path.join(__dirname,'new.html'))
     //res.status(500)
     res.json({"vishal":45})

  })

app.listen(port,()=>{
    console.log(`app listening on port http://${port}`)
})