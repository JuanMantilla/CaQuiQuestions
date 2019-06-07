var servicesModule = angular.module('AppServices');
servicesModule.factory('questionaryService', ['$http', function ($http) {
    return {
        apiUrl: apiUrl,
        getQuestionaries: function (){
            return $http.get(this.apiUrl + 'questionary');
        },
        getAccionById: function (accionId) {
            return $http.get(this.apiUrl + 'accion/' + accionId);

        },
        getQuestionaryById: function (questionaryId) {
            return $http.get(this.apiUrl + 'questionary/' + questionaryId);

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

        update: function (id, questionary) {
            return $http.put(this.apiUrl + 'questionary/' + id, questionary);
        },

        deleteAccion: function (accionId) {
            return $http.delete(this.apiUrl + 'accion/' + accionId);
        },

        delete: function (questionaryId) {
            return $http.delete(this.apiUrl + 'questionary/' + questionaryId);
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
        
        create: function (questionary) {
            return $http.post(this.apiUrl + 'questionary', questionary);
        },
        
        updateAccionAplicada: function (id, accion) {
            console.log(accion);
            return $http.put(this.apiUrl + 'accion_aplicada/' + id, accion);
        }

        

    };
}]);