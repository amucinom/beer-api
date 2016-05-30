angular.module('beerApp', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/beers', {
				controller: 'beerCtrl',
				templateUrl: 'main.html'
			})
			.when('/add', {

			})
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);
	});
