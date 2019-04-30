/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function (angular) {
    
    var app = angular.module('Questions', ['ui.router','ngAnimate', 'ui.bootstrap', 'chart.js', 'angularModalService']);
    app.controller('AlertModalCtlr', ['$scope', function ($scope) {
        var vm= this;
        vm.cuestionario=$scope.cuestionario;
    }]);
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider','$httpProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider) {
        $stateProvider
        .state('main', {
            url: '/app',
            templateUrl: '/js/Views/main.html',
            controller: 'Controller1'
        });
        $urlRouterProvider.otherwise('/app');
    }]);
    app.controller('Controller1', ['$scope', '$http','ModalService', function ($scope, $http, ModalService) {
            $scope.modal_agregar_cuestionario = function(){
                ModalService.showModal({ templateUrl: 'js/Views/modal.html' , controller : "AlertModalCtlr", controllerAs: "vm"})
                    .then( function( modal ) {modal.element.modal(); });
            };
            $scope.modal_cuestionario = function(cuestionario, index){
                console.log(cuestionario)
                ModalService.showModal({ templateUrl: 'js/Views/modal.html' , controller : "AlertModalCtlr", controllerAs: "vm", inputs: {cuestionario}})
                    .then( function( modal ) {modal.element.modal(); });
                $scope.opciones_cuestionario[index] = !$scope.opciones_cuestionario[index];    
            };
            $scope.cuestionario;
            $scope.selected = function (cuestionario) {
                $scope.cuestionario = cuestionario;
            };
            $(".button-collapse").sideNav();
            $('.modal-trigger').leanModal();
            $scope.mostrar_pregunta = [];
            $scope.mostrar_pregunta_function = function (index) {
                $scope.mostrar_pregunta[index] = !$scope.mostrar_pregunta[index];
            };
            $scope.opciones_cuestionario = [];

            $scope.opciones_cuestionario_function = function (index) {
                $scope.opciones_cuestionario[index] = !$scope.opciones_cuestionario[index];
            };
            $scope.cuestionarios = [];
            $scope.chart_options = "{scales: {yAxes: [{ticks: {beginAtZero:true}}]}}";
            $scope.respuestas_totales = 0;
            $scope.total = 0;
            $scope.labels = [];
            $scope.datos = [];

            $http.get('http://localhost:8000/api/user/1/questionaries', {
                headers: {"Access-Control-Allow-Origin": "*"}
            }).then(function (response) {
                var i = 1;
                angular.forEach(response.data[0].questionaries, function (cuestionario) {
                    var preguntas = [];
                    var cuestionario_iterativo = {
                        nombre: "",
                        id: 0,
                        preguntas: []
                    };
                    cuestionario_iterativo["nombre"] = cuestionario.name;
                    cuestionario_iterativo["id"] = cuestionario.id;
                    angular.forEach(cuestionario.questions, function (pregunta) {
                        var etiquetas = [];
                        var pregunta_iteradora = {
                            user_id: 0,
                            valor: "",
                            respuestas: [],                            
                            etiquetas: []
                        };
                        pregunta_iteradora = pregunta;
                        angular.forEach(pregunta.answers, function (respuesta) {
                            etiquetas.push(respuesta);
                        });                        
                        pregunta_iteradora["user_id"] = cuestionario.user_id;
                        pregunta_iteradora["etiquetas"] = etiquetas;
                        preguntas.push(pregunta_iteradora);
                        i++;
                    });

                    cuestionario_iterativo["preguntas"] = preguntas;
                    $scope.cuestionarios.push(cuestionario_iterativo);
                });
            }, function(error) {
                console.log('ERROR', error);
            });

            $scope.editar_pregunta = function (pregunta) {
                console.log(pregunta);
            };
            $scope.eliminar_pregunta = function (pregunta) {
                var r = confirm("Esta seguro que quiere eliminar la pregunta:\n" + pregunta.pregunta);
                if (r == true) {
                    $http({
                        method: 'DELETE',
                        url: 'http://localhost:8000/' + pregunta.user_id + '/eliminar/' + pregunta.id
                    }).then(function successCallback(response) {
                        alert(response.data);
                        location.reload();
                    }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
                }
                ;
            };
            $scope.editar_cuestionario = function (cuestionario, index) {
                console.log($scope.opciones_cuestionario[index]);
                $scope.opciones_cuestionario_function(index);
            };
            $scope.eliminar_cuestionario = function (cuestionario, index) {
                var r = confirm("Esta seguro que quiere eliminar la pregunta:\n" + cuestionario.nombre);
                if (r == true) {
                    $http({
                        method: 'DELETE',
                        url: 'http://localhost:8000/' + pregunta.user_id + '/eliminar/' + pregunta.id
                    }).then(function successCallback(response) {
                        alert(response.data);
                        location.reload();
                    }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
                }
                ;
                $scope.opciones_cuestionario_function(index);
            };
        }]);
    
    app.controller('cuestionarioProvider', ['$scope', '$http', 'cuestionario', function($scope ,$uibModalInstance ){
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);
          
            
})(angular);

