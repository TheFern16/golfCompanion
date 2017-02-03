var mongoose = require('mongoose');

var GolferSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    require: true
  }

});

module.exports = GolferSchema;
