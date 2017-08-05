(function(){
	'use strict';
	angular.module("MyApp").controller("userController",userController);
	
	userController.$inject = ["$scope","myService","_","moment"];

	function userController($scope,myService,_,moment){
		console.log("User Controller is initialised");
		var vm = this;

		// public variables
		vm.sex = "";
		vm.lastName = "";
		vm.firstName = "";
		vm.country = "";
		vm.dob = "";
		vm.countryList = [];
		
		vm.dateOptions = {
			changeYear: true,
    		changeMonth: true,
    		yearRange: '1900:-0',
    		dateFormat : "yy-mm-dd",
    		maxDate : "-18y"
		};

		vm.sexOption = {
			"M" : "Male",
			"F" : "Female",
			"" : "Select"
		}

		// private methods
		var loadCountries = loadCountries;

		// public methods
		vm.init = init;
		vm.create = create;

		function init(){
			loadCountries();			
		} // end of init

		function create(){
			console.log("First Name ",vm.firstName);
			console.log("Last Name ",vm.lastName);
			console.log("Sex ",vm.sex);
			var dateString = moment(vm.dob).format("YYYY-MM-DD");
			console.log("Date of Birth ",dateString);
			console.log("Country ",vm.country);
		}// end of create

		function loadCountries(){
			myService.getCountryByCodes().then(success,error);

			function success(response){
				//console.log(response);
				vm.countryList = response["data"];
			}

			function error(response){
				console.log(response);
			}
		} // end of loadCountries
	} // end of userController
})();