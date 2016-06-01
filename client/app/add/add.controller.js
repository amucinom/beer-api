angular.module('beerApp')
	.controller('addCtrl', ['$scope', '$rootScope', 'Beer', '$location',
		function($scope, $rootScope, Beer, $location) {
			$rootScope.PAGE = 'new';

			$scope.formData = {};
			$scope.loading = true;
			$scope.beer = new Beer();
			$scope.createBeer = function() {

				if ($scope.newBeer.$invalid) {
					$scope.$broadcast('record:invalid');
				} else {
					$scope.beer.name = $scope.formData.name;
					$scope.beer.location = $scope.formData.location;
					$scope.beer.abv = $scope.formData.abv;

					Beer.save($scope.beer, function() {
						console.log('Beer saved!');
					});
					$location.url('/');
				}

				// if ($scope.formData.name !== undefined && $scope.formData.location !== undefined && $scope.formData.abv !== undefined) {
				// 	$scope.loading = true;
				// 	console.log($scope.formData);
				// 	Beer.create($scope.formData)
				// 		.success(function (data) {
				// 			$scope.loading = false;
				// 			$scope.formData = {};
				// 			$scope.beers = data;
				// 		});
				// 	$location.url('/');
				// } else {
				// 	console.error('Error');
				// }
			};
		}]);
