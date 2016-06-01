angular.module('beerApp')
	.controller('singleCtrl', ['$scope', '$rootScope', '$location', 'Beer', '$routeParams'],
	function ($scope, $rootScope, $location, Beer, $routeParams) {
		$rootScope.PAGE = "single";
		$scope.beer = Beer.get( { id: parseInt($routeParams.id, 10) });

		$scope.deleteBeer = function() {
			$scope.beer.$delete();
			$location.url('/');
		};
	});
