/****** Load Module dependencies ******/
global.__base = __dirname + '/';

var express = require('express');
var Nodlarv   = require('./middlewear/Nodlarv.js');



var app = express(); 

app.locals = {
		     siteTitle: 'My Website',
		     pageTitle: 'The Home Page',
		     author: 'A L K thejitha',
		     description: 'My app',
		   };





app.configure(function () {
  
     //override static content path
     app.use(express.static(__dirname + '/public'));
     
     

	/* setting view engine */
	app.set('views', __dirname + '/views');  //override view path
	app.set('view engine', 'ejs');


	app.use(express.logger('dev'));  // logger


	app.use(Nodlarv(app)); // inject Nodlarv middlewear
    


});





var server = app.listen(3000,'127.0.0.1',function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});


