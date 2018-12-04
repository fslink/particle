'use strict';

angular.
	module('core.api.particle', ['ngResource']).
	factory('Device', ['$resource',
		function($resource){
			return $resource('https://api.particle.io/v1/devices/290030000f47363333343437/led?access_token=76218fc26bcda1b1ec153f81d39afd431f60edde', {}, {
				remoteLed: {
					method: 'POST',
					params: {led : 'off'}
				}
			});
		}]);
