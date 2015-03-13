var fs = require('fs');


module.exports = function(mongoose){

		 
	    var SchemaCollection = {};



		var fss = fs.readdirSync('./models/');


		 for (var index in fss) {

		 	var file =  fss[index].split('.');

		 	if((/^[A-Z]/).test(file[0]) && file[1] === "js"){

			  		var className = file[0];

			  		var Schema = require(__base+'models/'+fss[index])(mongoose);
			  		
			  		SchemaCollection[className] = mongoose.model(className,Schema);

			  		


			  }

		 }


		 return SchemaCollection;
		



}