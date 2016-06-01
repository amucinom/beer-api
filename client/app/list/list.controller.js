angular.module('beerApp')
	.controller('listCtrl', ['$scope','$rootScope', 'Beer', '$http', '$location',
		function($scope, $rootScope, Beer, $http, $location) {
			$rootScope.PAGE = "all";
			$scope.beers = Beer.query();
			// $scope.loading = true;

			// $http.get('api/beers')
			// 	.success(function (data) {
			// 		$scope.beers = data;
			// 	})
			// 	.error(function (data) {
			// 		console.log('Error: ', data);
			// 	});

			$scope.showBeer = function(id) {
				$location.url('/beers/' + id);
			};
	}]);
