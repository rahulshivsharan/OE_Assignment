(function(){
	'use strict'	
	
	angular.module("MyApp").controller("itemController",itemController);
	
	itemController.$inject = ["$scope","myService","_"];

	function itemController($scope,myService,_){
		console.log("itemController is initialised");

		var vm = this;

		// public variables
		vm.itemList = [];
		vm.itemName = "";
		vm.itemId = "";		
		
		// public methods
		vm.init = init;
		vm.searchItem = searchItem;
		


		// private methods
		var loadItems = loadItems;

		function init(){
			loadItems();
		}

		function loadItems(){
			var success = success;
			var error = error;

			myService.getItems().then(success,error);

			function success(response){
				vm.itemList = response["data"];
			}

			function error(response){
				console.log("Error ",response);
			}
		} // end of loadItems

		function searchItem(){
			if(angular.isDefined(vm.itemId) && angular.isString(vm.itemId)){
				vm.itemId = vm.itemId.trim();
			}

			if(angular.isDefined(vm.itemName) && angular.isString(vm.itemName)){
				vm.itemName = vm.itemName.trim();
			}

			var listById = _.filter(vm.itemList,function(item){
				return item.id === vm.itemId;
			});

			var listByName = _.filter(vm.itemList,function(item){
				return (item.displayName.indexOf(vm.itemName) !== -1);
			});	

			vm.itemList = _.union(listById,listByName);		
			
		} // end of searchItem


	}// end of Right Controller
})();