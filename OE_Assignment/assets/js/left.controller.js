(function(){
	'use strict'
	angular.module("MyApp").controller("LeftController",LeftController);
	
	LeftController.$inject = ["$scope"];

	function LeftController($scope){
		console.log("Left Controller is initialised");
	}
})();