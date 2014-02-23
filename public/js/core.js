var newApp = angular.module('newApp',['appController','appService','ngRoute','ui.bootstrap']);

newApp.config(['$routeProvider',
function($routeProvider) {
$routeProvider.
when('/',{
    templateUrl: 'partials/libros.html',
    controller : 'mainController'
}).
when('/agregar',{
	templateUrl: 'partials/agregar.html',
    controller: 'agregarController'
}).
otherwise({
redirectTo: '/'
});
}]);