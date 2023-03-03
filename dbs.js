const client = require('.')

client.connect();

(async () => {
    await client.connect();

client.query(`select*from user1_table`,(err,result)=>{
    if(!err){
        console.log(result.rows);
    }
    client.end();
})    
})
query();