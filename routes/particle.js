var express = require('express');
var router = express.Router();
var giveTheToken = require('../middleware/giveTheToken');

/* GET home page. */
router.get('/devices', giveTheToken, function(req, res, next) {
	console.log(token);
});

module.exports = router;
