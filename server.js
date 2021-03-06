const express = require('express');
const path = require('path');


const app = express();
const port = 6969;
// process.env.PORT || 1128;

//serve up static image file
//app.use client/dist/ --- photo file -- can ask Varun for help on this!



// Middleware
let loggerRequest = (req, res, next) => {
  console.log(`Request for ${req.method}`);
  next();
}

app.use(loggerRequest);
app.use(express.static(__dirname + '/client/dist'));
app.use(express.json());


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
