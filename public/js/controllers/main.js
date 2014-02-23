angular.module('appController', [])
    .controller('mainController', function ($scope, $http, Apps,filterFilter){
        //$scope.formData = {};
        $scope.b = false;

        
        Apps.get();
 
    		$scope.Buscar = function(){
                 Apps.get()
            .success(function(data){
               $scope.libros = filterFilter(data, $scope.q);
                
            });
    			return $scope.b = true;
    		}
    
       });