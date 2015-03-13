module.exports = function(mongoose){



	   var kittySchema = mongoose.Schema({
	   		
	   		 nickname : String,
	   		 _owner : { type : mongoose.Schema.ObjectId , ref: 'Owner' },
	        


		});



	    kittySchema.methods.meaw = function(){

	    	console.log(this.nickname+" says purrr");

	    };




	   return kittySchema;

}