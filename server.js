var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const SERVER_PORT = process.env.PORT || 5000;
const app = express();
const api = require('./server/routes');

mongoose.connect('mongodb://localhost/crm', function() {
console.log("DB connection established!!!");
})

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', api);

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
  next()
})

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));







