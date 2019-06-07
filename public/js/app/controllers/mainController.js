var controllerModule = angular.module('AppControllers');

controllerModule
    .controller('mainController', ['$scope', '$confirm', 'toastr', 'jwtHelper', '$rootScope', '$state', 'userService', 'questionaryService','questionsService', 'userService',
        function ($scope, $confirm, toastr, jwtHelper, $rootScope, $state, userService, questionaryService, questionsService, userService) {

            $scope.getAuthUser = function () {
                    userService.getAuthUser().then( function (response){
                    $rootScope.user = response.data;
                });
            }

            $rootScope.fetchQuestionaries = function (){
                questionaryService.getQuestionaries().then(function (response){
                    console.log("cuestionarios obtenidos");
                    $scope.questionaries = response.data;
                });
            }
            
            $scope.getAuthUser();
            $rootScope.fetchQuestionaries();

            $scope.deleteAnswer = function (question){
                $confirm({text: '¿Seguro que desea eliminar la siguiente pregunta?', value: question.value}).then(function () {
                    questionsService.delete(question.id).then(function (respuesta) {
                        $rootScope.fetchQuestionaries();
                        toastr.warning('¡Pregunta eliminada satisfactoriamente!');
                    });
                });
            }

            $scope.deleteQuestionary = function (questionary){
                $confirm({text: '¿Seguro que desea eliminar el siguiente cuestionario?', warning:'¡La información de este cuestionario no se podrá recuperar jamás!',value: questionary.name}).then(function () {
                    questionaryService.delete(questionary.id).then(function (response){
                        $rootScope.fetchQuestionaries();
                        toastr.warning('¡Cuestionario eliminado satisfactoriamente!');
                    });
                    
                });
            }

            $scope.logout = function (){
                localStorage.removeItem(TOKEN_KEY);
                $state.go('login');
            }
        }]);
