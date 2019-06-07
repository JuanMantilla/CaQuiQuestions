var controllerModule = angular.module('AppControllers');

controllerModule
    .controller('questionaryController', ['$scope', 'toastr', '$rootScope', '$state', '$uibModal', 'questionaryService',
        function ($scope, toastr, $rootScope, $state, $uibModal, questionaryService) {
            $scope.questionary = {};
            $scope.newQuestionary = true;

            init();

            function init(){
                if($state.params.questionaryId){
                    questionaryService.getQuestionaryById($state.params.questionaryId).then(function (response){
                        $scope.questionary = response.data;
                        $scope.newQuestionary = false;
                    })
                }
            }

            $scope.createQuestionary = function (){
                if ($scope.newQuestionary){
                    $scope.questionary.user_id= $rootScope.user.id;
                    $scope.questionary.state=0;
                    if ($scope.questionary.name && $scope.questionary.description){
                        questionaryService.create($scope.questionary).then(function (response){
                            $rootScope.fetchQuestionaries();
                            toastr.success('Cuestionario creado exitosamente!');
                        }, function (error){
                            $rootScope.fetchQuestionaries();
                            toastr.error('Error', error.data);
                        });
                    } else {
                        $rootScope.fetchQuestionaries();
                        toastr.error('Agregue un nombre y una descipción.');
                        return;
                    }
                    
                } else {
                    questionaryService.update($scope.questionary.id, $scope.questionary).then(function (response){
                        $rootScope.fetchQuestionaries();
                        toastr.success('¡Cuestionario actualizado exitosamente!');
                    });
                }
                
                
                $state.go("main");
            }

            $scope.deleteQuestionary = function() {
                questionaryService.delete($state.params.questionaryId).then(function (response){
                    $rootScope.fetchQuestionaries();
                    $state.go("main");
                });
            }
        }]);