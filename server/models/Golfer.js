var mongoose = require('mongoose');

var golferSchema = mongoose.Schema({

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

let GolferModel = mongoose.model('Golfer', golferSchema)

module.exports = GolferModel;
