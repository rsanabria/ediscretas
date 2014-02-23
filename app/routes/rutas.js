
module.exports = function(app, Libro){
    
    app.get('/libros', function(req, res){
        console.log('Método Get')
     		Libro.find({},{"titulo": 1, "autor":1, "biblioteca":1, "editorial":1, "temas":1 , "_id":0}, function(err,libros){
					 if(err)
						res.send(err);
		res.json(libros);
		
		 
					 });
    
        });
    app.get('/agregar', function(req, res){
        console.log('Get agregar');
    

        });
    
        app.post('/agregar', function ( req, res){
        console.log('Post');
        var libro = new Libro(req.body);
        libro.save( function(error, libro){
            res.json({libros : libro});
			
        });
        });
    
}
   