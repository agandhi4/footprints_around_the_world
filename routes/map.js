var express = require('express');
var router = express.Router();
var api_keys = require('../api_keys')

router.get('/', function(req, res, next) {
  res.render('map', {api_key: api_keys['google_maps']});
});

module.exports = router;
