
module.exports = (function(){

		
		return {

			
			

			home  : function(req,res){


					   var fluffy = new models.Kitten({ nickname : 'fluffy' });
	   				   var gayani = new models.Owner({ firstname : 'Gayani', lastname : 'Perera' , age : 24 });

	   				   fluffy.save(null); // 
	   				   gayani.save(null); //

						res.render('index/home',{

							body : "index rendered"
	 					});

			},


			
			about : function(req,res){


				res.render('index/about',{

						body : "about rendered"
 				});


			},



			contactUs : function(req,res){


				res.render('index/contactus',{

						body : "contactus rendered"
 				});


			}



		}


})();

