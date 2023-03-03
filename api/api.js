const express = require('express');
const router = express.Router();
const app = express();
const pg = require('pg');

const Pool = new pg.Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "789456",
  database: "user"
});

router.get('/user', (req, res) => {
 
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


router.get('/user/:id', (req, res) => {
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

  router.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    Pool.query('DELETE FROM college_info WHERE id = $1', [id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send(`Error deleting user with ID ${id}`);
      } else if (result.rowCount === 0) {
        res.status(404).send(`User with ID ${id} not found`);
      } else {
        res.send(`User with ID ${id} deleted successfully`);
      }
    });
  });

  const bodyParser = require('body-parser')
  router.use(bodyParser.json());
  router.post('/user', (req, res)=> {
    
    const user = req.body;
    console.log(req.body); 
    let insertQuery = `insert into college_info(id, name, role, fees) 
                       values(${user?.id}, '${user.name}', '${user.role}', '${user.fees}')`
    Pool.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    
})

    // client.end()


   router.put('/user/:id', (req, res)=> {
    console.log(req);
    let user = req.body;
    const id= req.params.id
    let updateQuery = `update college_info
                       set name = '${user.name}',
                       role = '${user.role}',
                       fees = '${user.fees}'
                       where id = ${req.params.id}`

    Pool.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    Pool.end;
})

module.exports = router;

