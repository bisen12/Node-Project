const express = require('express');
const pg = require('pg');

const app = express();


const Pool = new pg.Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "789456",
    database: "user"
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  Pool.query('SELECT * FROM college_info WHERE id = $1', [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(`Error fetching user with ID ${id}`);
    } else if (result.rows.length === 0) {
      res.status(404).send(`User with ID ${id} not found`);
    } else {
      res.send(result.rows[0]);
    }
  });
});


