var database = require(__base+'config/database.js');



module.exports = function(){

	database.connect(function(models){

		
		global.models = models;
		
	   
	    

	});


};



