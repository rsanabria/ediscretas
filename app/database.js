var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'libro');
var schema = require('./models/Libro.js').modelo;
var modelo = db.model('libros', schema);
module.exports = {
    db : db,
    modelo : modelo
};