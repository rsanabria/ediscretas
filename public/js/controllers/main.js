angular.module('appController', [])
    .controller('mainController', function ($scope, $http,Libros,filterFilter){
        //$scope.formData = {};
        $scope.b = false;

        
       Libros.get();
 
    		$scope.Buscar = function(){
                 Libros.get()
            .success(function(data){
               $scope.libros = filterFilter(data, $scope.q);
                
            });
    			return $scope.b = true;
    		}
             })
.controller('agregarController', function($scope, Agregar){
            $scope.formData = {};
    
            Agregar.get();
    
       $scope.crearLibro = function() {
		if($scope.formData)
           Agregar.create($scope.formData)
            .success(function(data){
                $scope.formData= {};
                $scope.libros = data;
				$scope.msj = "Libro guardado";
            });
        };
    
       });