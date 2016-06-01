angular.module('beerApp')
	.controller('singleBeerCtrl', ['$scope','$rootScope', 'Beer', '$routeParams', '$location',
		function($scope, $rootScope, Beer, $routeParams, $location) {
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

					$scope.beer.name = $scope.formData.name;
					$scope.beer.location = $scope.formData.location;
					$scope.beer.abv = $scope.formData.abv;

					$scope.beer.$update();
					$scope.isEditable = 1;
					$location.url('/');
			};

	}]);
