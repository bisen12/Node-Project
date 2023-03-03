const http = require('http');

const port = process.env.PORT  || 3030;
const hostname = process.env.HOSTNAME || "localhost";

const server = http.createServer((req,res)=>{
res.statusCode = 200;
console.log(req)
res.setHeader('Content-Type','text/html')
res.end('<h1>This is vishal bisen</h><p>this is the way to rock the world</p>');
});


server.listen(port,hostname ,()=>{
     console.log(`Server is listening http://${hostname}:${port}`);
});