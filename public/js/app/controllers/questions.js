var controllerModule = angular.module('AppControllers');

controllerModule
    .controller('questionController', ['$scope', 'toastr', '$rootScope', '$state', '$uibModal', 'questionsService',
        function ($scope, toastr, $rootScope, $state, $uibModal, questionsService) {
            $scope.questionToAdd = {}
            $scope.newQuestion = true;
            $scope.questionToAdd.answers = [];
            init();

            function init(){
                questionsService.getQuestionById($state.params.questionId).then(function (response){
                    if(response.data){
                        $scope.questionToAdd = response.data;
                        $scope.newQuestion = false;
                    }
                })
            }
            $scope.addQuestiontoQuestionary = function (){
                if ($scope.newQuestion){
                    $scope.questionToAdd.questionary_id = $state.params.questionaryId;
                    questionsService.create($scope.questionToAdd);
                } else {
                    questionsService.update($scope.questionToAdd.id, $scope.questionToAdd)
                }
                
            }

            $scope.defineCorrectAnswer = function (answer){
                for (var i = 0; i< $scope.questionToAdd.answers.length; i++){
                    if(answer.value === $scope.questionToAdd.answers[i].value){
                        $scope.questionToAdd.answers[i].correct = 1;
                    } else {
                        $scope.questionToAdd.answers[i].correct = 0;
                    }
                }
            }

            $scope.addAnswer = function (){
                $scope.questionToAdd.answers.push({})
            }

            $scope.removeAnswer = function (index){
                console.log(index)
                $scope.questionToAdd.answers.pop(index)
            }
        }]);