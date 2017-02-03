const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./routes');
const _ = require('lodash');

const port = process.env.PORT || 3000;
const app = express();

mongoose.connect('mongodb://localhost/golfCompanion');

// parsing into JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// serve the client the static client folder & routes
app.use(express.static(__dirname + '/../client'));


// CORS support which allows for options
const allowCrossDomain = (req, res, next) => {
  if ('OPTIONS' == req.method) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send(200);
  } else {
    next();
  }
};

app.use(allowCrossDomain);

// serve up the routes
app.models = require('./models/index');

_.each(routes, (controller, route) => {
  app.use(route, controller(app, route));
});


// are you listening?
app.listen(port, () => {
  console.log('3000... I am listening');
});

