var controllerModule = angular.module('AppControllers');

controllerModule
    .controller('mainController', ['$scope', 'toastr', 'jwtHelper', '$rootScope', '$state', 'PermissionStore', 'RoleStore',
        function ($scope, toastr, jwtHelper, $rootScope, $state, PermissionStore, RoleStore) {
            //var user =jwtHelper.decodeToken(localStorage.getItem(TOKEN_KEY));
            // console.log(user);
            // $scope.isCollapsed = false;
            // $scope.cerrarSesion = function () {
            //     localStorage.removeItem(TOKEN_KEY);
            //     PermissionStore.clearStore();
            //     RoleStore.clearStore();
            //     $state.go('login');
            // };

            // $rootScope.getActiveClass = function (state) {
            //     return ($state.current.name === state) ? 'active' : '';
            // };

        }]);
