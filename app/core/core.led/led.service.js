'use strict';

angular.
	module('core.led', ['ngResource']).
	factory('Led', ['$resource',
		function($resource){
			return $resource('https://api.particle.io/v1/devices/290030000f47363333343437/led?access_token=76218fc26bcda1b1ec153f81d39afd431f60edde', {}, {
				query: {
					method: 'POST',
					params: {led : 'off'}
				}
			});
		}]);
