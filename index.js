var express = require('express');
var app = express();
var cors = require('cors');
const e = require('express');

// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

const port = process.env.PORT || 3000
app.listen(port);
console.log('NOW! Running on port: ' + port);