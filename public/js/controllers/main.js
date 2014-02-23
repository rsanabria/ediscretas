angular.module('appController', [])
    .controller('mainController', function ($scope, $http,Libros,filterFilter){
        //$scope.formData = {};
        $scope.isCollapsed =true;

        
       Libros.get();
 
    		$scope.Buscar = function(){
                 Libros.get()
            .success(function(data){
               $scope.libros = filterFilter(data, $scope.q);
                
            });
    			return $scope.b = true;
    		}
    $scope.Collapse = function () {
  $scope.isCollapsed = false;
    $scope.contenido =[" Puedes Buscar por Autor, Título, Temas, Editorial o por Biblioteca",""]
    $scope.contenido2 = ["Ejemplo: Teoría de Grafos",""];
    $scope.contenido3 =[" Si tu libro tiene más de un autor, o múltiples temas, separa cada elemento por un espacio",""];
    $scope.contenido4 = ["Ejemplo : 1 2 3",""];
}
    $scope.Integrantes = function () {
    $scope.isCollapsed = false;
     $scope.contenido = ["Ramírez Sánchez Juan"," N.L 31"];
    $scope.contenido2 = ["Sanabria del Campo Carlos Rodrigo","N.l. 37"];
     $scope.contenido3 = ["Varela González Víctor Hugo","N.l. 44"];
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

