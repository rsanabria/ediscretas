var mongoose = require("mongoose");
exports.modelo  = new mongoose.Schema({
    titulo : {
		type: String,
		required : true
	},
    autor : {
        type : String,
        required : true
    },
    biblioteca : {
    	type: String,
    	required : true
    },
    editorial : {
    	type: String,
    	required: true
    },
    temas : {
        	type: String,
        required : true
        	
        }
    
});