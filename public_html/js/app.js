/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function (angular) {
    
    var app = angular.module('Questions', ['ngAnimate', 'ui.bootstrap', 'chart.js', 'angularModalService']);
    app.controller('AlertModalCtlr', ['$scope', '$http', 'cuestionario', function ($scope, $http, cuestionario) {
            var vm= this;
            vm.cuestionario=cuestionario;
        }]);
    app.controller('Controller1', ['$scope', '$http','ModalService', function ($scope, $http, ModalService) {
            $scope.modal_agregar_cuestionario = function(){
                console.log("hola");
                ModalService.showModal({ templateUrl: 'js/Views/modal.html' , controller : "AlertModalCtlr", controllerAs: "vm"})
                    .then( function( modal ) {modal.element.modal(); });
            };
            $scope.modal_cuestionario = function(cuestionario, index){
                console.log(cuestionario);
                ModalService.showModal({ templateUrl: 'js/Views/modal.html' , controller : "AlertModalCtlr", controllerAs: "vm", inputs: {cuestionario:cuestionario}})
                    .then( function( modal ) {modal.element.modal(); });
                $scope.opciones_cuestionario[index] = !$scope.opciones_cuestionario[index];    
            };
            $scope.cuestionario;
            $scope.selected = function (cuestionario) {
                $scope.cuestionario = cuestionario;
                console.log(cuestionario)
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
            $http.get('http://localhost:8000/user/1/cuestionarios').then(function (response) {
                var i = 1;
                console.log(response.data);
                angular.forEach(response.data, function (cuestionario) {

                    var preguntas = [];
                    var cuestionario_iterativo = {
                        nombre: "",
                        id: 0,
                        preguntas: []
                    };
                    cuestionario_iterativo["nombre"] = cuestionario.nombre;
                    cuestionario_iterativo["id"] = cuestionario.id;
                    angular.forEach(cuestionario.preguntas, function (pregunta) {
                        var datos = [];
                        var etiquetas = [];
                        var pregunta_iteradora = {
                            user_id: 0,
                            valor: "",
                            respuestas: [],                            
                            etiquetas: []
                        };
                        pregunta_iteradora = pregunta;
                        var iterador = 1;
                        angular.forEach(pregunta.respuestas, function (respuesta) {

                            
                            etiquetas.push(iterador);

                            iterador++;
                        });                        
                        pregunta_iteradora["user_id"] = cuestionario.user_id;
                        pregunta_iteradora["etiquetas"] = etiquetas;
                        preguntas.push(pregunta_iteradora);
                        i++;
                    });

                    cuestionario_iterativo["preguntas"] = preguntas;
                    $scope.cuestionarios.push(cuestionario_iterativo);
                });
            });

            $scope.editar_pregunta = function (pregunta) {
                console.log(pregunta.pregunta);
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
    
          app.controller('ModalAController', function($scope ,$uibModal,$uibModalInstance , alumnoResource ){

  //fin de crear alumno

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

})
          
            
})(angular);

