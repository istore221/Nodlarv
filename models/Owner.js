module.exports = function(mongoose){


	  var OwnerSchema = mongoose.Schema({

			firstname : String,
			lastname : String,
			age : Number,
			_kittens : [{ type : mongoose.Schema.ObjectId , ref: 'Kitten' }] // collection of kittens

		});

	  return OwnerSchema;
	

	
}