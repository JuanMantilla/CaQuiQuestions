var servicesModule = angular.module('AppServices');
servicesModule.factory('userService', ['$http', function ($http) {
    return {
        apiUrl: apiUrl,
        getAuthUser: function () {
            return $http.get(this.apiUrl + 'user/');
        },
        getAccionById: function (accionId) {
            return $http.get(this.apiUrl + 'accion/' + accionId);

        },
        getAccionByEstrategiaId: function (estrategiaId){
            return $http.get(this.apiUrl + 'accion/acciones_estrategia/' + estrategiaId);

        },
        createAccion: function (accion) {
            return $http.post(this.apiUrl + 'accion/', accion);
        },
        updateAccion: function (id, accion) {
            console.log(accion);
            return $http.put(this.apiUrl + 'accion/' + id, accion);
        },
        deleteAccion: function (accionId) {
            return $http.delete(this.apiUrl + 'accion/' + accionId);
        },
        aplicarAccion: function (accion) {
            return $http.post(this.apiUrl + 'accion_aplicada/', accion);
        },
        getAccionAplicada: function (data) {
            return $http.post(this.apiUrl + 'get_accion_aplicada/', data);
        },
        deleteAccionAplicada: function (accionId) {
            return $http.delete(this.apiUrl + 'accion_aplicada/' + accionId);
        },
     
        updateAccionAplicada: function (id, accion) {
            console.log(accion);
            return $http.put(this.apiUrl + 'accion_aplicada/' + id, accion);
        }

        

    };
}]);