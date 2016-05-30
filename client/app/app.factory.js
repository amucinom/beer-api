angular.module('beerApp')
	.factory('Beer', [ '$http', function ($http) {
		return {
			get: function() {
				return $http.get('api/beers');
			},
			create: function(beerData) {
				return $http.post('api/beers', beerData);
			},
			delete: function(id) {
				return $http.delete('api/beers/' + id);
			}
		};
	}]);
