var controllerModule = angular.module('AppControllers');

controllerModule.controller('registerController', ['$scope', '$stateParams', '$location', 'toastr', '$rootScope', 'registerService',
function ($scope, $stateParams, $location, toastr, $rootScope, registerService) {
    $scope.accion = "Guardar";
    $rootScope.titulo = "Agrega un nuevo usuario!";

    $rootScope.usuarios_asign = [];
    $scope.usuario = {};
    $rootScope.roles = [];

    // $rootScope.getAllRoles();
    $scope.register = function () {
        $scope.user.type = "admin";
        registerService.createUser($scope.user).then(function (response) {
            toastr.success('Exito', 'Usuario creado!');
        });
    };


}]);
