const express = require('express');
const golferController = require('./controllers/GolferController.js');
const golferModel = require('./models/Golfer.js');

let router = express.Router();

router.route('/')
  .get(function(req, res) {
    golferModel.find((err, scores) => {
      if (err) {
        res.send(err);
      } else {
        res.json(scores);
      }
    });
  });


module.exports = router;