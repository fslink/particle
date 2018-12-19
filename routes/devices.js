var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Device = require('../model/Device.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
	Device.find({}, function(err, devices){
		if(err) {
			handleError(err);
			res.sendStatus(500);

		} else {
			res.json(devices);
		}
	});
});

module.exports = router;
