const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const _ = require('lodash');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));


mongoose.connect('mongodb://localhost/golfCompanion');
mongoose.connection.once('open', (req, res, next) => {

  app.models = require('./models/index');

  let routes = require('./routes');
  _.each(routes, (controller, route) => {
    app.use(route, controller(app, route));
  });


  console.log('I am listening');
  app.listen(3000);
});

