angular.module('beerApp')
	.factory('Beer', function ($resource) {
		return $resource('api/beers/:id', { id: '@id' }, {
			'update': { method: 'PUT' }
		});
	});
