
module.exports = function(app){
    
    app.get('/', function(req, res){
        console.log('Método Get')
    res.sendfile('./views/index.html');
    
        });
    
    app.post('/', function (req, res){
        console.log('Método Post ')    
    });
    
    
}
   