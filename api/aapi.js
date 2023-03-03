const express = require('express');
const app = express();
const port = 3023;
const user = require('./api.js');
const school = require('./school.js');

app.use("/user", user);
app.use("/school", school);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

