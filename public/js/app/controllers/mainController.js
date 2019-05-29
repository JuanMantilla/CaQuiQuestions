var controllerModule = angular.module('AppControllers');

controllerModule
    .controller('mainController', ['$scope', 'toastr', 'jwtHelper', '$rootScope', '$state', 'userService',
        function ($scope, toastr, jwtHelper, $rootScope, $state, userService) {
            
            var user = {"id":1}
            init();

            function init (){
                userService.getQuestionariesByUser(user.id).then(function (response){
                    console.log(response.data)
                    $scope.user = response.data;
                });
            }
        }]);
