var controllerModule = angular.module('AppControllers');

controllerModule
    .controller('questionController', ['$scope', 'toastr', '$rootScope', '$state', '$uibModal', 'questionsService',
        function ($scope, toastr, $rootScope, $state, $uibModal, questionsService) {
            $scope.questionToAdd = {}
            $scope.newQuestion = true;
            $scope.questionToAdd.answers = [];
            init();

            function init(){
                if ($state.params.questionId){
                    questionsService.getQuestionById($state.params.questionId).then(function (response){
                        $scope.questionToAdd = response.data;
                        $scope.newQuestion = false;
                    })
                }
            }
            $scope.addQuestiontoQuestionary = function (){
                var answersValid = true;
                for (var i = 0; i < $scope.questionToAdd.answers.length; i++){
                    if (!$scope.questionToAdd.answers[i].value){
                        answersValid = false;
                        break;
                    }
                }
                if ($scope.questionToAdd.value){
                    if (answersValid){
                        if ($scope.newQuestion){
                            $scope.questionToAdd.questionary_id = $state.params.questionaryId;
                            questionsService.create($scope.questionToAdd).then(function (response){
                                console.log(1);
                                toastr.success('¡Pregunta agregada exitosamente!');
                                $scope.questionToAdd = {};
                                $scope.questionToAdd.answers = [];
                            });
                        } else {
                            questionsService.update($scope.questionToAdd.id, $scope.questionToAdd).then(function (response){
                                toastr.success('¡Pregunta actualizada exitosamente!');
                                $state.go("main");
                            })
                        }
                        console.log(2);
                        $rootScope.fetchQuestionaries();
                    } else {
                        toastr.error('Todas las respuestas deben tener un valor.');
                    }
                    
                } else {
                    toastr.error('Defina una pregunta.');
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
                _.remove($scope.questionToAdd.answers, function(n) {
                    return $scope.questionToAdd.answers.indexOf(n) == index;
                });
            }
        }]);