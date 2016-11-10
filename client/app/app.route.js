// Default Routes for Application
// TODO: use to setup default states when home is not accessible (i.e. user is not logged in)
(function() {
  // Used for debugging purposes
  var userLoggedIn = true;

  angular.module('app')
  .run(appRun);

  appRun.$inject = ['routerHelper'];
  
  /* @ngInject */
  function appRun(routerHelper) {
    if(!userLoggedIn){
      console.log('User Not Logged In');
      routerHelper.configureStates(loginRoute());
    } else {
      console.log('User Logged In');
      routerHelper.setState('home');
    }
  }

  // Define getStates
  function getStates(config) {
    return config;
  }

  //set Login Route
  function loginRoute() {
    var config = [{
      state: 'default',
      config: {
        url: '/',
        templateUrl: 'app/views/login/login.html',
        controller: 'loginController',
        controllerAs: 'vm',
        title: 'Login'
      }
    }];

    // return Config to routerHelper
    return getStates(config);
  }

}());
