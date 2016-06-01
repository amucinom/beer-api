angular.module('beerApp')
	.factory('Beer', ['$resource', '$http', function ($resource, $http) {

		return $resource('/api/beers/:id', { id: '@_id' }, {
			update: { method: 'PUT' }
		});

		// return {
		// 	get: function() {
		// 		return $http.get('api/beers');
		// 	},
		// 	create: function(beerData) {
		// 		return $http.post('api/beers', beerData);
		// 	},
		// 	delete: function(id) {
		// 		return $http.delete('api/beers/' + id);
		// 	}
}]);
