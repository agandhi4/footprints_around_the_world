var Profile = require('../models/Profile');
var express = require('express');
var router = express.Router();
var haversine = require('haversine')

router.post('/', function(req, res, next) {
  Profile.find({}, null, {}, function(err, profiles) {
    if (err) {
      res.json({
        'error': 'FAIL'
      })
    }

    user_location = {
      "latitude": req.body.latitude,
      "longitude": req.body.longitude,
    }

    var results = [];
    for (i = 0; i < profiles.length; i++) {
      if (haversine(profiles[i], req.body, {threshold: req.body.threshold})) {
        results.push(profiles[i])
      }
    }
    res.json(results)
  });
});

module.exports = router;
