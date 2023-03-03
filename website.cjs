const http = require('http');
const {Console } = require('console')
const fs =require('fs');
const port = process.env.PORT  || 3009;
const hostname = process.env.HOSTNAME || "localhost";

const server = http.createServer((req,res)=>{
     console.log(req.url)
     res.setHeader('Content-Type','text/html')

if(req.url=='/'){
     res.statusCode = 200;
     res.end('<h1>vishal</h1><p>bisen</p>')
}
else if(req.url == '/about'){
     res.statusCode = 200;
     res.end('<h1>about vishal</h1><p>hey this is about vishal</p>')
}
else if(req.url == '/vishal'){
     res.statusCode = 200;
     res.end('<h1>about vishal</h1><p>hey this is about vishal</p>')
}
else if(req.url == '/cwh'){
     res.statusCode = 200;
     res.end('welcome in home page')
}
else if(req.url == '/hello'){
     res.statusCode = 200;
const data = fs.readFileSync('C:/Users/vshlb/OneDrive/Desktop/node-js/expresscode/in.html');
     res.end(data.toString());
}
else{
     res.statusCode = 404;
     res.end('<h1>not found</h1><p>page not found</p>')
}

});


server.listen(port,hostname ,()=>{
     console.log(`Server is listening http://${hostname}:${port}`);
});