const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "789456",
    database: "user"
})

client
.connect()
.then((res)=>console.log(res))
.then((res)=>console.log("Db connect ~"))
.catch((e)=>console.log("DB connection Failed!","\n",e));

client.query("CREATE TABLE COMPANY(id number,Name char(20),surname char(20),Roll_no number,Age number)",(err,res)=>{
    console.log(err,res)
    client.end()
})