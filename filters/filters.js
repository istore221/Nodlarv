module.exports = function(app){



	app.all('/user/*', function(req, res, next) {
	 
	     console.log("before filter fired user/ ");

	 	 next();

	  
    });


	

}