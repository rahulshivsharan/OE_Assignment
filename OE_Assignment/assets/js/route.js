(function(){
	'use strict';
	angular.module("MyApp").config(routeMapping);
	angular.module("MyApp").config(defaultRoute);

	routeMapping.$inject = ["$stateProvider"];
	defaultRoute.$inject = ["$stateProvider","$urlRouterProvider"];

	function routeMapping($stateProvider){
		$stateProvider.state("items",{
			url : "/items",				
			views : {
				"createAndSearch":{
					templateUrl : "/itemModule.html",
					controller : "itemController",
					controllerAs : "vm"
				}
			}
		}).state("users",{
			url : "/users",				
			views : {
				"createAndSearch":{
					templateUrl : "/userModule.html",
					controller : "userController",
					controllerAs : "vm"
				}
			}
		});
	}

	function defaultRoute($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/items');
	}
})();