'use strict';

angular.
	module('dashboard').
		component('dashboard', {
			templateUrl:'dashboard/dashboard.template.html',
			controller: function dashboardController(){
				var self = this;
				self.test = "salut ma couille";
			}
		});