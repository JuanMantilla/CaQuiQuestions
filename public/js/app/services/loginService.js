/**
 * Created by Full Stack JavaScrip on 21/07/2016.
 */
/**
 * Created by Full Stack JavaScrip on 14/06/2016.
 */
var servicesModule = angular.module('AppServices');
servicesModule.factory('loginService', ['$http','PermissionStore','RoleStore', function ($http,PermissionStore,RoleStore) {
    return {
        apiUrl: apiUrl,
        auth: function (user) {
            return $http({
                method: "POST",
                skipAuthorization: true,
                url: apiUrl + "auth/login/",
                data: user
            });
        },
        getaAuthUser: function () {
            return $http.get(this.apiUrl + 'auth/login');

        },
        setUser : function(aUser){
            user = aUser;
        },
        isLoggedIn : function(){

            return(user)? user : false;
        }

    };
    
}]);