var servicesModule = angular.module('AppServices');
servicesModule.factory('questionsService', ['$http', function ($http) {
    return {
        apiUrl: apiUrl,
        getAllQuestions: function () {
            return $http.get(this.apiUrl + 'question/');
        },
        getQuestionById: function (questionId) {
            return $http.get(this.apiUrl + 'question/' + questionId);

        },
        getAccionByEstrategiaId: function (estrategiaId){
            return $http.get(this.apiUrl + 'accion/acciones_estrategia/' + estrategiaId);

        },
        getQuestionsByQuestionaryId: function (questionaryId){
            return $http.get(this.apiUrl + 'question/questions_questionary/' + questionaryId);

        },
        createAccion: function (accion) {
            return $http.post(this.apiUrl + 'accion/', accion);
        },
        updateAccion: function (id, accion) {
            return $http.put(this.apiUrl + 'accion/' + id, accion);
        },
        update: function (id, question) {
            return $http.put(this.apiUrl + 'question/' + id, question);
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
        
        create: function (question) {
            return $http.post(this.apiUrl + 'question', question);
        },
        
        updateAccionAplicada: function (id, accion) {
            console.log(accion);
            return $http.put(this.apiUrl + 'accion_aplicada/' + id, accion);
        }

        

    };
}]);