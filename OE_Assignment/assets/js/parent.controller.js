(function(){
	'use strict'
	angular.module("MyApp").controller("ParentController",ParentController);
	
	ParentController.$inject = ["$scope"];

	function ParentController($scope){
		console.log("Parent Controller is initialised");
	}

})();