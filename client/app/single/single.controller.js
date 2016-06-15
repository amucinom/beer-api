angular.module('beerApp')
	.controller('singleBeerCtrl', ['$scope','$http', '$rootScope', 'Beer', '$routeParams', '$location',
		function($scope, $http, $rootScope, Beer, $routeParams, $location) {
			// $scope.token = ff38a546dd3a7921822fcfeefa92fa37;
			$rootScope.PAGE = "single";
			$scope.formData = {};

			// Choose whether to show form to edit entry
			$scope.isEditable = 1;
			$scope.selectEditable = function(setEdit) {
				$scope.isEditable = setEdit;
			};
			$scope.beginEdit = function(checkEditable) {
				return $scope.isEditable === checkEditable;
			};

			console.log($routeParams.id);
			$scope.beer = Beer.get({ id: $routeParams.id });

			// Delete beer
			$scope.deleteBeer = function() {
				$scope.beer.$delete();
				$location.url('/');
			};
			// Update beer entry
			$scope.updateBeer = function() {
					// $scope.beer.name = $scope.newBeer.name.$modelValue;
					// $scope.beer.location = $scope.newBeer.location.$modelValue;
					// $scope.beer.abv = $scope.newBeer.abv.$modelValue;
					// $scope.beer.name = $scope.formData.name;
					// $scope.beer.location = $scope.formData.location;
					// $scope.beer.abv = $scope.formData.abv;

					$scope.beer.$update();
					$scope.isEditable = 1;
					$location.url('/');
			};

			// $scope.getBeerInfo = function() {
			// 	$http.get('http://api.brewerydb.com/v2/beers?name=Negra%20Modelo&key=ff38a546dd3a7921822fcfeefa92fa37&format=json')
			// 		.success(function(data) {
			// 			console.log(data);
			// 		});
			// }();

	}]);
