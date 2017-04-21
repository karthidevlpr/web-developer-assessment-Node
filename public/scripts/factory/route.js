/**
 * Created by karthick on 21/04/17.
 */

angular.module('routeService', ['ngResource']).factory('route', function ($resource) {
    return $resource('/:entity/:id/:action/:status/:process',
        {entity: '@entity', id: '@id', action: '@action', status: '@status', process: '@process'}, {
            post: {method: 'POST', params: {}},
            list: {method: 'GET', params: {}, isArray: true},
            get: {method: 'GET', params: {}},
            update: {method: 'PUT', params: {}},
            delete: {method: 'DELETE', params: {}}

        });
});
