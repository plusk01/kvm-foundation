'use strict';

/* Declare some modules to use later */
angular.module('kvmApply.filters', []);
angular.module('kvmApply.services', [])
angular.module('kvmApply.directives', [])
angular.module('kvmApply.controllers', [])

// Declare app level module which depends on filters, and services
angular.module('kvmApply', [
	'kvmApply.filters',
	'kvmApply.services',
	'kvmApply.directives',
	'kvmApply.controllers',
	'ngRoute',
	'ui.bootstrap',
	'restangular'
])
.config(['$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {
	$routeProvider.when('/', {
		templateUrl: 'features/info/info.html',
		controller: 'infoCtrl'
	})
	.when('/form', {
		templateUrl: 'features/application/application.html',
		controller: 'applicationCtrl'
	})
	.when('/thanks', {
		templateUrl: 'features/thanks/thanks.html',
		controller: 'thanksCtrl'
	})
	.otherwise({redirectTo: '/'});

	RestangularProvider.setBaseUrl(BASE);
}]);
