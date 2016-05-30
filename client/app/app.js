angular.module('beerApp', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/beers', {
				controller: 'beerCtrl',
				templateUrl: 'main.html'
			})
			.when('/beers/new', {
				controller: 'addCtrl',
				templateUrl: 'add.html'
			})
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);
	});
