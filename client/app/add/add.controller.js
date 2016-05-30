angular.module('beerApp')
	.controller('addCtrl', ['$scope', '$rootScope', 'Beer', '$location',
		function($scope, $rootScope, Beer, $location) {

			$rootScope.PAGE = 'new';

		}]);
