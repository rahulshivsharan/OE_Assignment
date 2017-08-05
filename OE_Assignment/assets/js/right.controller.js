(function(){
	'use strict'
	angular.module("MyApp").controller("RightController",RightController);
	
	RightController.$inject = ["$scope"];

	function RightController($scope){
		console.log("RightController is initialised");
	}
})();