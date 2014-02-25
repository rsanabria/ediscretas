angular.module('appController', [])
    .controller('mainController', function ($scope, $http, Libros, filterFilter) {
        $scope.isCollapsed = true;
        $scope.alerts = [
            { type: 'danger', msg: "No se Encontraron Libros" }];
        
        Libros.get();
 
        $scope.Buscar = function () {
            Libros.get()
                .success(function (data) {
                    $scope.libros = filterFilter(data, $scope.q);
                
                });
            $scope.b = true;
            return $scope.b;
        };
        $scope.Collapse = function () {
            $scope.isCollapsed = false;
            $scope.contenido = [" Puedes Buscar por Autor, Título, Temas, Editorial o por Biblioteca", ""];
            $scope.contenido2 = ["Ejemplo: Teoría de Grafos", ""];
            $scope.contenido3 = [" Si tu libro tiene más de un autor, o múltiples temas, separa cada elemento por un espacio", ""];
            $scope.contenido4 = ["Ejemplo : 1 2 3", ""];
        };
        $scope.Integrantes = function () {
            $scope.isCollapsed = false;
            $scope.contenido = ["Ramírez Sánchez Juan", " N.L 31"];
            $scope.contenido2 = ["Sanabria del Campo Carlos Rodrigo", "N.l. 37"];
            $scope.contenido3 = ["Varela González Víctor Hugo", "N.l. 44"];
        };
    
    })
    .controller('agregarController', function ($scope, Agregar) {
        $scope.formData = {};
        $scope.formData.temas = [];
        var temas, t;
        $scope.i = 0;
        t = [];
        t.push($scope.i);
        $scope.t = t;
    
    
        Agregar.get();
       
        $scope.crearLibro = function () {
            temas  = $scope.formData.tema;
            $scope.formData.tema = "";
            temas = temas.split(" ");
            for (te in temas) {
                $scope.formData.temas.push(temas[te]);
                  //$scope.formData.tema = $scope.formData.tema + " " +temas[t].split(".")[0];
            }
		    if ($scope.formData)
            Agregar.create($scope.formData)
                .success(function (data) {
                    $scope.formData = {};
                    //$scope.libros = data;
				    $scope.msj = "Libro guardado";
                });
        };
    
        $scope.agregarTema = function () {
            $scope.i++;
            $scope.t.push($scope.i);
        };

    
    });

