angular.module('appService', [])

.factory('Apps', function($http){
    return{
        get : function() {
            return $http.get('/');
        },
        create : function(data) {
            return $http.post('/', data);
        } ,
        delete : function(id) {
            return $http.delete('/' + id);
    }

    }
});