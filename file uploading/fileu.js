const { json } = require("express");
const express = require("express")
const fileUpload = require("express-fileupload")

const app = express()

app.use(fileUpload());



//Upload Endpont
app.post('/upload',(req, res) =>{
    // console.log(req);
    // if(req.files === null){
    //     return res.status(400, json({msg:'no file Uploaded'}));
    // }
    console.log(req.Files);
    const file = req.files.file;
    file.mv(`${__dirname}/public/uploads/${file.name}`, err => {
        if(err){
            console.log(err);
            return res.status(500).send(err);
        }
        res.json({filename : file.name, filepath:`${__dirname}/public/uploads/${file.name}`})
    });
});

app.listen(5000, () => console.log('server started...'));