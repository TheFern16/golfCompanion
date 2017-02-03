const GolferModel = require('../models/Golfer.js');


module.exports = {

  findAll: function() {
    GolferModel.find({}, (err, family) => {
      if (err) {
        return err;
      } else {
        return family
      }
    });
  }

};