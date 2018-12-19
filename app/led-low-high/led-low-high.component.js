'use strict';

angular.
	module('ledLowHigh').
		component('ledLowHigh', {
			templateUrl:'led-low-high/led.template.html',
			controller: ['Device', function LedLowHighController(Device){
				var self = this;
				this.response = "no request";
				this.status = "off";
				this.setLed = function(on_off) {
					if(on_off == "on"){
						self.response = "Processing...";
						self.status = "on";
						Device.led.onOff({led: 'on'}, function(data){
							self.response = data;
						}, function(err){
							self.response = err;
						});
					} else {
						self.response = "Processing...";
						self.status = "off";
						Device.led.onOff({led : "off"}, function(data){
							self.response = data;
						}, function(err){
							self.response = err;
						});
					}
				};
			}]
		});