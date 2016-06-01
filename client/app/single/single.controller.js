angular.module('beerApp')
	.controller('beerCtrl', ['$scope','$rootScope', 'Beer', '$routeParams', '$location',
		function($scope, $rootScope, Beer, $routeParams, $location) {
			$rootScope.PAGE = "single";

			$scope.beer = Beer.get({ id: $routeParams.id });
			$scope.deleteBeer = function() {
				$scope.beer.$delete();
				$location.url('/');
			};
	}]);
