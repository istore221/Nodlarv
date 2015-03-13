
var controllers = {};


module.exports = function(){



	var fss = require('fs').readdirSync(__base+'controllers/');


	for (var index in fss) {

		 	var file =  fss[index].split('.');

		 	controllers[file[0]] = require(__base+'controllers/'+file[0]);

	}


	global.controllers = controllers;



};



