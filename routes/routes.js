

module.exports = function(app) {




  app.get('/',controllers.indexController.home);


  app.get('/about',controllers.indexController.about);


  app.get('/contactUs',controllers.indexController.contactUs);


  app.get('/login',controllers.userController.login);
 

  app.get('/user/login',controllers.userController.login);



}



