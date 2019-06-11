var controllerModule = angular.module('AppControllers');

controllerModule
    .controller('questionaryController', ['$scope', 'toastr', '$rootScope', '$state', '$uibModal', 'questionaryService',
        function ($scope, toastr, $rootScope, $state, $uibModal, questionaryService) {
            $scope.questionary = {};
            $scope.newQuestionary = true;
            $scope.apiUrl = apiUrl.replace("api", "#/answer-questionary");
            $scope.user = window.localStorage.getItem('USER');
            $scope.canAnswer = false;
            init();


            function init() {
                if ($state.params.questionaryId) {
                    questionaryService.getQuestionaryById($state.params.questionaryId).then(function (response) {
                        if (response.data.state < 2) {
                            $scope.questionary = response.data;
                            $scope.newQuestionary = false;
                        } else {
                            if ($scope.user) {
                                $scope.canAnswer = true;
                            } else {
                                $scope.user = {};
                            }
                            $scope.questions = response.data;
                            $scope.currentQuestion = 0;
                            $scope.totalQuestions = $scope.questions.length;

                        }

                    })
                }
            }

            $scope.createQuestionary = function () {
                if ($scope.newQuestionary) {
                    $scope.questionary.user_id = $rootScope.user.id;
                    $scope.questionary.state = 0;
                    if ($scope.questionary.name && $scope.questionary.description) {
                        questionaryService.create($scope.questionary).then(function (response) {
                            $rootScope.fetchQuestionaries();
                            toastr.success('Cuestionario creado exitosamente!');
                        }, function (error) {
                            $rootScope.fetchQuestionaries();
                            toastr.error('Error', error.data);
                        });
                    } else {
                        $rootScope.fetchQuestionaries();
                        toastr.error('Agregue un nombre y una descipción.');
                        return;
                    }

                } else {
                    questionaryService.update($scope.questionary.id, $scope.questionary).then(function (response) {
                        $rootScope.fetchQuestionaries();
                        toastr.success('¡Cuestionario actualizado exitosamente!');
                    });
                }


                $state.go("main");
            }

            $scope.deleteQuestionary = function () {
                questionaryService.delete($state.params.questionaryId).then(function (response) {
                    $rootScope.fetchQuestionaries();
                    $state.go("main");
                });
            }

            $scope.modifyQuestionaryState = function () {
                $scope.questionary.state == 1 ? $scope.questionary.state = 0 : $scope.questionary.state = 1;
                questionaryService.update($scope.questionary.id, $scope.questionary).then(function (response) {
                    $rootScope.fetchQuestionaries();
                    $scope.questionary.state == 1 ? toastr.success('¡Cuestionario publicado exitosamente!') : toastr.success('¡Cuestionario detenido exitosamente!');

                });
            }

            $scope.goToNextQuestion = function () {
                $scope.currentQuestion < $scope.totalQuestions - 1 ? $scope.currentQuestion = $scope.currentQuestion + 1 : '';
            }

            $scope.goToPreviousQuestion = function () {
                $scope.currentQuestion <= $scope.totalQuestions && $scope.currentQuestion > 0 ? $scope.currentQuestion = $scope.currentQuestion - 1 : $scope.currentQuestion = 0;
            }
            $scope.initQuestionary = function () {
                $scope.canAnswer = true;
                console.log($scope.user.name)
                window.localStorage.setItem('USER', $scope.user.name)
            }
        }]);