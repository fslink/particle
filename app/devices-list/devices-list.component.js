'use strict';

angular.
	module('devicesList').
		component('devicesList', {
			templateUrl:'devices-list/devices-list.template.html',
			controller: ['Device', function devicesListController(Device){
				var self = this;
				this.devices = Device.devicesList.findAll();
				console.log(this.devices);

			}]
		});