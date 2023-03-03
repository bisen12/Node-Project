const express= require('express');

const app = express();

const port = 3600

app.get('/home',(req,res)=>{
     res.send("welcome to my home page");
})
app.get('/about',(req,res)=>{
     res.write("welcome to my about page");
     res.write("welcome to my about page");
     res.send();
})
app.get('/data',(req,res)=>{
     res.send({
          id:1,
          name:"vishal",
          age:22,
     });
})
app.listen(port,() =>{
     console.log(`listening to the port number ${port}`);
});