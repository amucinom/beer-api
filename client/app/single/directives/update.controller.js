angular.module('beerApp')
	.controller('updateCtrl', ['$scope','$rootScope', 'Beer', '$routeParams', '$location',
		function($scope, $rootScope, Beer, $routeParams, $location) {
			$rootScope.PAGE = "single";

			$scope.beer = Beer.get({ id: $routeParams.id });
			$scope.updateBeer = function() {
				$scope.beer.$update();
				console.log('Beer has been updated');
				$location.url('/');
			};
		}]);
