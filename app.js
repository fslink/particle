var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var Particle = require('particle-api-js');
var port = 8000;

var Device = require('./model/Device.js');
mongoose.connect('mongodb://localhost/particle');

var app = express();
var particle = new Particle();

var token;
particle.login({username: 'mowglysofiann@hotmail.com', password: 'azerty57'}).then(
  function(data) {
    token = data.body.access_token;
    var devicesPr = particle.listDevices({ auth: token });

    devicesPr.then(
	  function(devices){
	    devices.body.forEach(function(device){
	    	console.log(device.id)
	    	Device.find({id: device.id}, function(err, mongoDevice){
	    		console.log(mongoDevice)
	    		if(err) {
	    			handleError(err);

	    		} else if (mongoDevice.length > 0) {
	    			console.log('mongo: ' + mongoDevice);

	    		} else {
	    			Device.create(device, function(err){
	    				if(err) handleError(err);
	    				console.log('device saved');
	    			});
	    		} 
	    	});
	    });
	    
	  },
	  function(err) {
	    console.log('List devices call failed: ', err);
	  }
	);
    console.log('data : ' + token);
    return token;
  },
  function (err) {
  	console.log('error : ' + err);
  	return err;
  }
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Client
app.use('/', express.static(path.join(__dirname, 'app')))

// API Routes
app.use('/api/devices', require('./routes/devices'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, function(){
	console.log('Server lauched in ' + port)
})

module.exports = app;

