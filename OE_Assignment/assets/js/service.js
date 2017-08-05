(function(){
	'use strict';
	angular.module("MyApp").factory("myService",myService);

	myService.$inject = ["$http","$q"];
	
	function myService($http,$q){
		var obj = {};
		
		obj.getItems = getItems;	
		obj.getCountryByCodes = getCountryByCodes;
		obj.createUser = createUser;
		obj.getUsers = getUsers;

		return obj;

		function getItems(){
			var url = "/items";
			var deferred = $q.defer();
			$http.get(url).then(success,error);
			
			return deferred.promise;

			function success(respose){
				deferred.resolve(respose);
			}

			function error(response){
				deferred.reject(response);
			}
		} // end of getItems

		function getCountryByCodes(){
			var url = "https://restcountries.eu/rest/v2/all?fields=name;alpha2Code";
			var deferred = $q.defer();
			$http.get(url).then(success,error);
			return deferred.promise;

			function success(respose){
				deferred.resolve(respose);
			}

			function error(response){
				deferred.reject(response);
			}
		} // end of getCountryByCodes

		function createUser(firstName,lastName,sex,dob,country){
			var url = "/users";
			var deferred = $q.defer();
			
			$http.post(url,{
				"firstName" : firstName,
			  	"lastName" : lastName,
			    "sex" : sex,
			    "dob" : dob,
			    "country" : country
			}).then(success,error);

			return deferred.promise;

			function success(respose){
				deferred.resolve(respose);
			}

			function error(response){
				deferred.reject(response);
			}
		}// end of createUser	

		function getUsers(){
			var url = "/users";
			var deferred = $q.defer();
			$http.get(url).then(success,error);
			
			return deferred.promise;

			function success(respose){
				deferred.resolve(respose);
			}

			function error(response){
				deferred.reject(response);
			}
		}// end of getUsers	
	} // end of myService
})();