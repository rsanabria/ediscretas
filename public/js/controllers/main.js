angular.module('appController', [])
    .controller('mainController', function ($scope, $http, Apps){
        //$scope.formData = {};
        
        Apps.get()
            .success(function(){
               
                
            });
 
    
    
       });