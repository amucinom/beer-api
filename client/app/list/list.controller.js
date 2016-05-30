angular.module('beerApp')
	.controller('listCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
		$scope.beerData = {};

		$http.get('api/beers')
			.success(function (data) {
				$scope.beers = data;
			})
			.error(function (data) {
				console.log('Error: ', data);
			});

	}]);
