/*const express = require('express');
const multer = require ('multer')
const app = express();
const port = 3000;


const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
    
            cb(null,"public")

        },
        filename:function (req,file,cb){
            console.log(file.fieldname)
            cb(null,file.fieldname + "-" + Date.now() + ".png")

        }
    })
}).single("file_up")

app.post("/upload",upload,(req,resp) => {
    resp.send("file upload")
});


app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });*/
const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'public/' });

app.post('/upload', upload.single('file'), function (req, res, next) {
  // req.file is the uploaded file
  // you can now do something with it, like save it to a database or process it further
  res.send('File uploaded successfully!');
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});