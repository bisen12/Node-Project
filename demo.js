const express = require('express');
const pg = require('pg');

const app = express();
const port = 3000;

const Pool = new pg.Pool({
  user: 'your-postgres-username',
  host: 'localhost',
  database: 'your-postgres-database',
  password: 'your-postgres-password',
  port: 5432,
});


app.get('/users', (req, res) => {
    Pool.query('SELECT * FROM college_info', (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send(`Error fetching user with ID ${id}`);
        }
        else{
            res.send(result)
        }
    })
})

app.post('/user', (req, res) => {
    const { name, role,fees } = req.body;
    Pool.query('INSERT INTO college_info(id,name,role, fees) VALUES ($1, $2, $3,$4) RETURNING id', [id,name,role, fees], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error inserting user into database');
      } else {
        const id = result.rows[0].id;
        res.send(`User with ID ${id} inserted successfully`);
      }
    });
  });
  
// app.put('/users/:id', (req, res) => {
//     const id = req.params.id;
//     const { name, role } = req.body;
//     Pool.query('UPDATE college_info SET name = $1, role = $2 WHERE id = $3', [name, role, id], (err, result) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send(`Error updating user with ID ${id}`);
//       } else if (result.rowCount === 0) {
//         res.status(404).send(`User with ID ${id} not found`);
//       } else {
//         res.send(`User with ID ${id} updated successfully`);
//       }
//     });
//   });

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
