angular.module('beerApp', ['ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				controller: 'listCtrl',
				templateUrl: 'app/list/list.html'
			})
			.when('/beers/new', {
				controller: 'addCtrl',
				templateUrl: 'app/add/add.html'
			})
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);
	});
