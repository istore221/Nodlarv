var CtrilHandler = require('./CtrlHandler.js');
var ModelHandler = require('./modelHandler.js');
var Filters = require(__base+'filters/filters.js');
var Routes = require(__base+'routes/routes.js');

var Nodlarv = function(app){

	
	this._boot = function(){

		
		CtrilHandler();
		ModelHandler();
		Filters(app);
		Routes(app);


		

	}

};



module.exports =  function(app,dependencies) {
    
    
    var nodlarv = new Nodlarv(app);
    nodlarv._boot();

    
    return function(req, res, next) {

    	
    	next();

    }


    
};