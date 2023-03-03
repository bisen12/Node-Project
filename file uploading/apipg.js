const express = require('express');
const multer = require('multer');
const { Pool } = require('pg');

const app = express();
const upload = multer({ dest: 'public/' });

// Connect to PostgreSQL database
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'user',
  password: '789456',
  port: 5432,
});
// Use the multer middleware to handle file upload

app.post('/upload', upload.single('file'), function (req, res, next) {
    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).send('No file uploaded!');
    }
  // Create a new row in the "files" table and save the uploaded file data
  const query = {
    text: 'INSERT INTO files(name, data, content_type) VALUES($1, $2, $3) RETURNING *',
    values: [req.file.originalname, req.file.buffer, req.file.mimetype],
  };
  Pool.query(query, (err, result) => {
    if (err) return console.error(err);
    res.send('File uploaded and saved to database!');
  });
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
