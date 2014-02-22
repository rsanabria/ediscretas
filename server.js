//Configuración Inicial
var express = require('express');
var app     = express(); 
var port    = process.env.PORT || 8080;
var routes  = require('./app/routes/rutas'); 
var db      = require('./app/database');


//Configuración
app.configure( function () {
    app.use(express.static(__dirname + '/public'));  // asigna la locacion de archivos estaticos /public/img sera /ing para usuarios
    app.use(express.logger('dev'));                  //escribe cada pedido en la consola
    app.use(express.bodyParser());                   // saca informacion de html en POST
    app.use(express.methodOverride())                // simula DELETE y PUT
});

//Aqui van tus modelos

//Carga las rutas
routes(app);

//Inicio de la app con el servidor node server.js
app.listen(port);
console.log("La App escucha en el puerto: " + port);


