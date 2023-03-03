const { json } = require("express");
const express = require("express")
const fileUpload = require("express-fileupload")

const app = express()

app.use(fileUpload());

app.get("/", (req, res) => {
    res.send("Hello world");
});

//Upload Endpont
app.post('/upload', (req, res) => {
    console.log(req.Files);
    const file = req.files.file;
    file.mv(`${__dirname}/uploads/${file.name}`, err => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.json({ filename: file.name, filepath: `${__dirname}/uploads/${file.name}` })
    });
});

app.listen(5050, () => console.log('server started...'));