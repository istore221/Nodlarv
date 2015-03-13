module.exports = function(app){



	app.all('/photo/*', function(req, res, next) {
	 
	     console.log("fired filter");

	 	 next();

	  
    });


	

}