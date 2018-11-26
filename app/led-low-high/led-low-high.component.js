'use strict';

angular.
	module('ledLowHigh').
		component('ledLowHigh', {
			templateUrl:'led-low-high/led.template.html',
			controller: ['Led', function LedLowHighController(Led){
				var self = this;
				this.response = "no request";
				this.status = "my mojo where is my mojo";
				this.setLed = function(on_off) {
					if(on_off == "on"){
						self.status = "on";
						self.response = Led.query({led : "on"});

					} else {
						self.status = "off";
						self.response = Led.query({led : "off"});
					}
				};
			}]
		});