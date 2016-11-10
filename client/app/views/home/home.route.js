(function() {
  'ngInject';
  angular.module('app.home')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'home',
      config: {
        url: '/home',
        templateUrl: 'app/views/home/home.html',
        controller: 'homeController',
        controllerAs: 'vm',
        title: 'Home'
      }
    }];
  }

}());
