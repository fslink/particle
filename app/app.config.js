'use strict';

angular.
	module('particle').
		config(['$routeProvider',
			function config($routeProvider){
				$routeProvider.
					when('/led-low-high', {
						template: '<led-low-high></led-low-high>'
					}).
					otherwise('/led-low-high');
			}
		]);