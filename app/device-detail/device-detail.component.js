'use strict';

angular.
	module('deviceDetail').
		component('deviceDetail', {
			templateUrl:'device-detail/device-detail.template.html',
			controller: ['Device', '$routeParams', function deviceDetailController(Device, $routeParams){
				var self = this;
				var id = $routeParams.deviceId;
				self.device = Device.device.findById({deviceId: id});
			}]
		});