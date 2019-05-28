/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var questionsApp = angular.module("questionsApp", [
    'ui.router',
	'AppControllers',
	'AppServices',
    'toastr',
	'ui.bootstrap',
	'ui.bootstrap.modal',
	'angular-click-outside',
	'angular-confirm',
	'angular-jwt',
	'permission',
	'permission.ui',
	'ngSanitize',
	'ngCsv',
	'chart.js'

]);

questionsApp.provider('modalState', function ($stateProvider) {
	var provider = this;
	this.$get = function () {
		return provider;
	};
	this.state = function (stateName, options) {
		//console.log(options);
		var modalInstance;
		$stateProvider.state(stateName, {
			url: options.url,
			onEnter: function ($uibModal, $state) {
				modalInstance = $uibModal.open(options);
				modalInstance.result['finally'](function () {
					modalInstance = null;
					if ($state.$current.name === stateName) {
						$state.go('^');
					}
				});
			},
			onExit: function () {
				if (modalInstance) {
					modalInstance.close();
				}
			},
			data:options.data
		});
	};
});

questionsApp.config(['$stateProvider', '$urlRouterProvider', 'toastrConfig', '$locationProvider', 'modalStateProvider','$httpProvider',
	function ($stateProvider, $urlRouterProvider, toastrConfig, $locationProvider, modalStateProvider,$httpProvider) {

	angular.extend(toastrConfig, {
		autoDismiss: false,
		containerId: 'toast-container',
		maxOpened: 0,
		newestOnTop: true,
		positionClass: 'toast-top-right animation-fade',
		preventDuplicates: false,
		preventOpenDuplicates: false,
		target: 'body'
	});

		$urlRouterProvider.otherwise('/login');


	$stateProvider
		.state('main', {
			url: '/app',
			templateUrl: '/js/app/views/main.html',
			controller: 'mainController'
		})
		.state('login', {
			url: '/login',
			templateUrl: '/js/app/views/login.html',
			controller: 'loginController',
			authenticate: false
		});

	modalStateProvider.state('main.createQuestionary', {
		url: '/create/questionary',
		templateUrl: '/js/app/views/questionaries/createQuestionary.html',
		controller: 'questionaryController',
		size: 'lg'
	});
		
		
}]);

// questionsApp.run(['$confirmModalDefaults', 'PermissionStore', 'RoleStore', '$rootScope', 'jwtHelper', 'loginService',
// 	function ($confirmModalDefaults, PermissionStore, RoleStore, $rootScope, jwtHelper, loginService) {
// 		var token = window.localStorage.getItem(TOKEN_KEY);
// 		if (token && !jwtHelper.isTokenExpired(token)) {

// 			loginService.getaAuthUser().then(function (response) {
// 				$rootScope.usuario = response.data;
// 				var permissions = $rootScope.usuario.permissions;
// 				//console.log($rootScope.usuario);
// 				PermissionStore.defineManyPermissions(permissions, function (permissionName) {
// 					return _.include(permissions, permissionName);
// 				});
// 				var rol = $rootScope.usuario.rol;
// 				RoleStore.defineRole(rol, permissions);
// 			});
// 		}
// 	$confirmModalDefaults.templateUrl = 'alertas.html';
// 	$confirmModalDefaults.defaultLabels.title = 'Mensaje del sistema';
// 	$confirmModalDefaults.defaultLabels.ok = 'Si';
// 	$confirmModalDefaults.defaultLabels.cancel = 'No';
// }]);