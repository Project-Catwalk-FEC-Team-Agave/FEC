const express = require('express');
const path = require('path');
const parse = require('body-parser');


const app = express();
const port = 6969;
// process.env.PORT || 1128;



// Middleware
let loggerRequest = (req, res, next) => {
  console.log(`Requset for ${req.method}`);
  next();
}

app.use(loggerRequest);
app.use(express.static(__dirname + '/client/dist'));
app.use(express.json());


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
