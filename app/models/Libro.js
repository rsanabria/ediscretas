var mongoose = require("mongoose");
exports.modelo  = new mongoose.Schema({
    titulo : {
		type: String,
		required : true
	},
    autor : {
        type : String,
        required : true
    }
    
});