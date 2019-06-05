var controllerModule = angular.module('AppControllers');

controllerModule
    .controller('questionController', ['$scope', 'toastr', '$rootScope', '$state', '$uibModal', 'questionsService',
        function ($scope, toastr, $rootScope, $state, $uibModal, questionsService) {
            $scope.questionToAdd = {}
            $scope.questionToAdd.answers = [];
            init();

            function init(){
                questionsService.getQuestionById($state.params.questionId).then(function (response){
                    if(response.data){
                        $scope.questionToAdd = response.data;
                    }
                })
            }
            $scope.addQuestiontoQuestionary = function (){
                $scope.questionToAdd.questionary_id = $state.params.questionaryId;
                questionsService.create($scope.questionToAdd);
            }

            $scope.addAnswer = function (){
                $scope.questionToAdd.answers.push({})
            }

            $scope.removeAnswer = function (index){
                console.log(index)
                $scope.questionToAdd.answers.pop(index)
            }
        }]);