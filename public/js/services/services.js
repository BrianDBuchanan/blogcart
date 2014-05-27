'use strict';
angular.module('blogCartApp')
	.factory('PostsSvc', function($resource) {
		return $resource('api/collections/brian',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('PostSvc', function($resource) {
		return $resource('api/collections/brian :id',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			}
			)
	})

.factory('theCartSvc', function($resource) {
		return $resource('api/collections/brianProducts',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('theCartSvc', function($resource) {
		return $resource('api/collections/brianProducts/:id',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			}
			)
	})
	.factory('theCartSvc', function($resource) {
		return $resource('api/collections/brianCart',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('theCartSvc', function($resource) {
		return $resource('api/collections/brianCart/:id',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			}
			)
	})

	;

