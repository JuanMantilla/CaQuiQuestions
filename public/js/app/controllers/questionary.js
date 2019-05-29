var controllerModule = angular.module('AppControllers');

controllerModule
    .controller('questionaryController', ['$scope', 'toastr', '$rootScope', '$state', '$uibModal', 'questionaryService',
        function ($scope, toastr, $rootScope, $state, $uibModal, questionaryService) {
            console.log("asiduha")
            $scope.questionary = {};
            
            $scope.createQuestionary = function (){
                $scope.questionary.user_id=1;
                $scope.questionary.state=0;
                questionaryService.create($scope.questionary);
            }

        }]);