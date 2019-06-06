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
                    $scope.questionary.user_id=1;
                    $scope.questionary.state=0;
                    questionaryService.create($scope.questionary);
                } else {
                    questionaryService.update($scope.questionary.id, $scope.questionary);
                }
            }

            $scope.deleteQuestionary = function() {
                questionaryService.delete($state.params.questionaryId);
            }
        }]);