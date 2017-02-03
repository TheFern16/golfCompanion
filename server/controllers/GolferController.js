const GolferModel = require('../models/Golfer.js');


module.exports = {

  findAll: function() {
    GolferModel.find({}, (err, golfer) => {
      if (err) {
        return err;
      } else {
        return golfer
      }
    });
  }

};