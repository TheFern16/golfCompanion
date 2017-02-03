const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./routes');
const _ = require('lodash');

const app = express();

// parsing into JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// serve the client the static client folder
app.use(express.static(__dirname + '/../client'));

// allow CORS

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})



// connect to the mongoose schema
mongoose.connect('mongodb://localhost/golfCompanion');

// serves the golfer model into the below function and returns the methods
app.models = require('./models/index');
_.each(routes, (controller, route) => {
  app.use(route, controller(app, route));
});

console.log('3000... I am listening');
app.listen(3000);

