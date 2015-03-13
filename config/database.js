var mongoose = require('mongoose');
var config = require('./connection.js');


module.exports.connect = function(onConnect){

	

	mongoose.connect('mongodb://'+config.runat+':'+config.port+'/'+config.database);

	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));

	db.once('open', function callback () {


		if(typeof onConnect === 'function'){onConnect(require('./modconfig.js')(mongoose));}

		


	});


};
