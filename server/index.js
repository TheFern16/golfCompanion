const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const _ = require('lodash');
const highcharts = require('highcharts');

const app = express();

// parsing into JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// serve the client the static client folder
app.use(express.static(__dirname + '/../client'));


// connect to the mongoose schema
mongoose.connect('mongodb://localhost/golfCompanion');
mongoose.connection.once('open', (req, res, next) => {

  app.models = require('./models/index');

  let routes = require('./routes');
  _.each(routes, (controller, route) => {
    app.use(route, controller(app, route));
  });


  console.log('3000... I am listening');
  app.listen(3000);
});

