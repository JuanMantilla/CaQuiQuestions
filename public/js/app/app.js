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

	$httpProvider.interceptors.push(function (toastr, $location, $q, jwtHelper) {
		return {
			request: function (conf) {
				var token = window.localStorage.getItem(TOKEN_KEY);
				if (token && !jwtHelper.isTokenExpired(token)) {
					conf.headers.Authorization = 'Bearer ' + token;
				} else {
					window.localStorage.removeItem(TOKEN_KEY);
					$location.path("/login");
				}
				return conf;
			}
		}
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
		})
		.state('register', {
			url: '/register',
			templateUrl: '/js/app/views/register.html',
			controller: 'registerController',
			authenticate: false
		})
		;

	modalStateProvider.state('main.createQuestionary', {
		url: '/create/questionary',
		templateUrl: '/js/app/views/questionaries/createQuestionary.html',
		controller: 'questionaryController',
		size: 'lg'
	});

	modalStateProvider.state('main.updateQuestionary', {
		url: '/update/questionary/:questionaryId',
		templateUrl: '/js/app/views/questionaries/createQuestionary.html',
		controller: 'questionaryController',
		size: 'lg'
	});

	modalStateProvider.state('main.deleteQuestionary', {
		url: '/questionary/:questionaryId/delete/',
		templateUrl: '/js/app/views/questionaries/deleteQuestionary.html',
		controller: 'questionaryController',
		size: 'md'
	});
	
	modalStateProvider.state('main.createQuestion', {
		url: '/questionary/:questionaryId/create/question/',
		templateUrl: '/js/app/views/questionaries/createQuestion.html',
		controller: 'questionController',
		size: 'lg'
	});

	

	modalStateProvider.state('main.updateQuestion', {
		url: '/update/question/:questionId',
		templateUrl: '/js/app/views/questionaries/createQuestion.html',
		controller: 'questionController',
		size: 'lg'
	});
		
		
}]);

questionsApp.run(['$confirmModalDefaults',
	function ($confirmModalDefaults) {
		
	$confirmModalDefaults.templateUrl = 'alertas.html';
	$confirmModalDefaults.defaultLabels.title = 'Mensaje del sistema';
	$confirmModalDefaults.defaultLabels.ok = 'Si';
	$confirmModalDefaults.defaultLabels.cancel = 'No';
}]);