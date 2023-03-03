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

router.get('/school', (req, res) => {
    Pool.query('SELECT * FROM school', (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send(`Error fetching user with ID ${id}`);
        }
        else{
            res.send(result)
        }
    })
})

router.get('/school/:id', (req, res) => {
    const id = req.params.id;
    Pool.query('SELECT * FROM school WHERE id = $1', [id], (err, result) => {
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

  router.delete('/school/:id', (req, res) => {
    const id = req.params.id;
    Pool.query('DELETE FROM school WHERE id = $1', [id], (err, result) => {
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
  router.post('/school', (req, res)=> {
    
    const schoolData = req.body;
    console.log(req);
    let insertQuery = `insert into school(id, name, roll_no, surname,age) 
                       values(${schoolData?.id}, '${schoolData.name}', '${schoolData.roll_no}', '${schoolData.surname}',${schoolData.age})`
    Pool.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    

})


router.put('/school/:id', (req, res)=> {
  console.log("req.body ", req)
  console.log("req.body ", req.body)
  let user = req.body;
  let updateQuery = `update school
                     set name = '${user.name}',
                     roll_no = '${user.roll_no}',
                     surname = '${user.surname}',
                     age = '${user.age}'
                     where id = ${user.id}`

  Pool.query(updateQuery, (err, result)=>{
      if(!err){
          res.send('Update was successful')
      }
      else{ console.log(err.message) }
  })
  Pool.end;
})
module.exports = router;

