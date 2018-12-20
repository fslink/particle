'use strict';

angular.
	module('particle').
		config(['$routeProvider',
			function config($routeProvider){
				$routeProvider.
					when('/', {
						template: '<dashboard></dashboard>'
					}).
					when('/led-low-high', {
						template: '<led-low-high></led-low-high>'
					}).
					when('/devices', {
						template: '<devices-list></devices-list>'
					}).
					when('/devices/:deviceId', {
						template: '<device-detail></device-detail>'
					}).
					otherwise('/');
			}
		]);