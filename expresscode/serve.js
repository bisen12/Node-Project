const path =require("path")
const port =3621
const app = express();


const staticPath= path.join(__dirname,"C:/Users/vshlb/OneDrive/Desktop/node-js/public/id.html");

app.use(express.static(staticPath));

app.get('/home',(req,res)=>{
    res.send("welcome to my home page");
})
app.get('/about',(req,res)=>{
    res.write("welcome to my about page");
    res.write("welcome to my about page");
    res.send();
})

app.listen(port,() =>{
    console.log(`listening to the port number ${port}`);
});