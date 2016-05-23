angular.module('starter.services',['ngResource'])

.factory('Session',function ($resource) {
	// body...
	return $resource('http:localhost:5000/sessions/:sessionId');
});

