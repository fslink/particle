module.exports = function(req, res, next){
	var Particle = require('particle-api-js');
	var particle = new Particle();
	var token;
	particle.login({username: 'mowglysofiann@hotmail.com', password: 'azerty57'}).then(
	  function(data) {
	    token = data.body.access_token;
	    console.log('data : ' + token);
	    return token;
	  },
	  function (err) {
	  	console.log('error : ' + err);
	  	return err;
	  }
	);
	next();
}