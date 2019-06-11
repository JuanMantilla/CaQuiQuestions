var controllerModule = angular.module('AppControllers');

controllerModule
    .controller('answerQuestionaryController', ['$scope', 'toastr', '$rootScope', '$state', '$uibModal', 'questionaryService',
        function ($scope, toastr, $rootScope, $state, $uibModal, questionaryService) {
            $scope.questionary = {};
            $scope.user = window.localStorage.getItem('USER');
            $scope.finalQuestionary = JSON.parse(window.localStorage.getItem('QUESTIONARY'));
            $scope.canAnswer = false;
            $scope.questionsAnswered = [];
            init();
            function init() {
                questionaryService.getQuestionaryById($state.params.questionaryId).then(function (response) {
                    $scope.questions = response.data;
                    $scope.newQuestionary = false;
                    if ($scope.user) {
                        $scope.canAnswer = true;
                        if ($scope.finalQuestionary){
                            $scope.currentQuestion =  parseInt(window.localStorage.getItem('CURRENT_QUESTION'));
                        } else {
                            $scope.currentQuestion = 0;
                            $scope.finalQuestionary = [];
                        }
                    } else {
                        $scope.user = {};
                        $scope.finalQuestionary = [];
                        $scope.currentQuestion = 0;
                    }
                    $scope.totalQuestions = $scope.questions.length;
                })
            }

            $scope.goToNextQuestion = function (question) {
                if ($scope.questionsAnswered[$scope.currentQuestion]){
                    if ($scope.currentQuestion < $scope.totalQuestions - 1){
                        var questionAnswered = {
                            "question" : question,
                            "answerSelected" : $scope.questionsAnswered[$scope.currentQuestion]
                        }
                        $scope.finalQuestionary.push(questionAnswered);
                        window.localStorage.setItem('QUESTIONARY', JSON.stringify($scope.finalQuestionary));
                        window.localStorage.setItem('CURRENT_QUESTION', $scope.currentQuestion + 1);
                        $scope.currentQuestion = $scope.currentQuestion + 1;
                    }
                } else {
                    toastr.error('Elija una respuesta');
                }
            }

            $scope.goToPreviousQuestion = function (index) {
                if ($scope.currentQuestion !== 0){
                    _.remove($scope.finalQuestionary, function(n) {
                        return $scope.finalQuestionary.indexOf(n) == index;
                    });
                    window.localStorage.setItem('QUESTIONARY', JSON.stringify($scope.finalQuestionary));
                    window.localStorage.setItem('CURRENT_QUESTION', $scope.currentQuestion - 1);
                    $scope.currentQuestion = $scope.currentQuestion - 1;
                } else {
                    $scope.currentQuestion = 0
                }
            }

            $scope.initQuestionary = function () {
                $scope.canAnswer = true;
                window.localStorage.setItem('USER', $scope.user.name);
            }
        }]);