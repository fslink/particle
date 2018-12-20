'use strict';

angular.
	module('core.api.particle', ['ngResource']).
	factory('Device', ['$resource',
		function($resource){
			return {
				led: $resource('https://api.particle.io/v1/devices/290030000f47363333343437/led?access_token=76218fc26bcda1b1ec153f81d39afd431f60edde', {}, {
					onOff: {
						method: 'POST',
						params: {led : 'off'}
					}
				}),
				devicesList: $resource('http://localhost:8000/api/devices', {}, {
					findAll: {
						method: 'GET',
						isArray: true
					}
				}),
				device: $resource('http://localhost:8000/api/devices/:deviceId', {}, {
					findById: {
						method: 'GET',
						params: {deviceId : ''}
					}
				}),
			};
		}]);
	