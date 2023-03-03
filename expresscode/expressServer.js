const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('vishal')
  })
  app.get('/gh', (req, res) => {
    res.send('WELCOME 2')
  })
app.listen(port, () => {
  console.log(`Example app listening on port http://${port}`)
})