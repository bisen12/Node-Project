const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  console.log(req.files.files);

  const fileArray = req.files.files;
  console.log(Array.isArray(fileArray));
  const fileNames = [];


  
  if (Array.isArray(fileArray)) {
    fileArray.forEach(file => {
      file.mv(`${__dirname}/public/uploads/${file.name}`, err => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }
      });
      fileNames.push(file.name);
    });
  } else {
    fileArray.mv(`${__dirname}/public/uploads/${fileArray.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
    });
    fileNames.push(fileArray.name);
  }

  res.json({fileNames: fileNames});
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
