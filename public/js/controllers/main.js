angular.module('appController', [])
    .controller('mainController', function ($scope, $http, Libros, filterFilter) {
        $scope.isCollapsed = true;
        $scope.alerts = [
            { type: 'danger', msg: "No se Encontraron Libros" }];
        $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
        $scope.orderProp = "titulo";
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
            $scope.contenido5 = ["Busca por temas Generales no Específicos"];
            $scope.contenido6 = ["Ejemplo :  2 3 4 , no 2.3 3.4 5.5"];
        };
        $scope.Integrantes = function () {
            $scope.isCollapsed = false;
            $scope.contenido = ["Ramírez Sánchez Juan", " N.L 31"];
            $scope.contenido2 = ["Sanabria del Campo Carlos Rodrigo", "N.l. 37"];
            $scope.contenido3 = ["Trejo Mercado Rubi Carolina", "NL: 41"];
            $scope.contenido4 = [" Valle Juarez Pedro Angel", "NL: 43"];
            $scope.contenido5 = ["Varela González Víctor Hugo", "N.L. 44"];                        
            $scope.contenido6 = [];
        };
        
        $scope.Nomen = function () {
            $scope.isCollapsed = false;
            $scope.contenido = ["BC-Biblioteca Central"];
            $scope.contenido2 = ["EP-Posgrado- Enzo Levi"];
            $scope.contenido3 = ["BP-Principal - Antonio Duval Jaime"];
            $scope.contenido4 = ["DCB-Anexo - Enrique Rivero Borrell "]
            $scope.contenido4 = ["FC- Ciencias- Ricardo Monges López"];
            $scope.contenido5 = ["FCA- Contaduría Jorge C. Bolio Castellanos"];
            $scope.contenido6 = [];
        }
    
    })
    .controller('agregarController', function ($scope, Agregar) {
        $scope.formData = {};
        $scope.formData.temas = [];
        var temas, t;
        $scope.i = 0;
        $scope.alerts = []; 
        Agregar.get();
       
        $scope.crearLibro = function () {
            
            temas  = $scope.formData.tema;
            $scope.formData.tema = "";
            temas = temas.split(" ");
            for (te in temas) {
                $scope.formData.temas.push(temas[te]);
                $scope.formData.tema = $scope.formData.tema + " " +temas[te].split(".")[0];
            }
		    if ($scope.formData)
            Agregar.create($scope.formData)
                .success(function (data) {
                    $scope.alerts = [
            { type: 'success', msg: "Libro Añadido" }]; 
                    $scope.formData.tem = "";
                    $scope.formData = {};
                    //$scope.libros = data;
				    $scope.msj = "Libro guardado";
                });
        };

    $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
    });

