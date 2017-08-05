(function(){
	'use strict';
	angular.module("MyApp").factory("myService",myService);

	myService.$inject = ["$http","$q"];
	
	function myService($http,$q){
		var obj = {};
		obj.getItems = getItems;	
		obj.getCountryByCodes = getCountryByCodes;	
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
	} // end of myService
})();