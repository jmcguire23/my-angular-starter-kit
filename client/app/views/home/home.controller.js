(function() {
  'ngInject';

  angular.module('app.home')
    .controller('homeController', homeController);

  homeController.$inject = ['$http'];

  function homeController($http) {
    /* jshint validthis: true */
    var vm = this;

    vm.loggedIn = true;

    vm.name = 'James';

    console.log(vm);
  }
}());
