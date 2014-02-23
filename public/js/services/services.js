angular.module('appService', [])

.factory('Libros', function($http){
    return{
        get : function() {
            return $http.get('/libros');
        }
        

    }
})
.factory('Agregar', function($http){
    return {
        get: function(){
            return $http.get('/agregar');
        },
        create : function(data) {
            return $http.post('/agregar', data);
        }
        
    }
});