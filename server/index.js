const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./routes');
const cors = require('cors');
const _ = require('lodash');
const port = process.env.PORT || 3000;

const app = express();
app.use(cors())

mongoose.connect('mongodb://localhost/golfCompanion');

// parsing into JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// serve the client the static client folder & routes
app.use(express.static(__dirname + '/../client'));


// CORS support
const whiteList = ['https://www.amdoren.com/api/time.php'];

const corsOptionsDelegate = (req, callback) => {
  let corsOptions;
  if (whiteList.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions);
}

app.get('/api/golfer', cors(corsOptionsDelegate), (req, res, next) => {
  res.json({msg: 'CORS is enabled for the whitelist.'})
})


// serve up the routes
app.models = require('./models/index');

_.each(routes, (controller, route) => {
  app.use(route, controller(app, route));
});


// are you listening?
app.listen(port, () => {
  console.log('3000... I am listening');
});

