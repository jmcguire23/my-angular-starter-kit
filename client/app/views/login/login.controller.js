(function() {
  'ngInject';

  angular.module('app.login')
    .controller('loginController', loginController);

  loginController.$inject = [];

  function loginController() {
    /* jshint validthis: true */
    var vm = this;

    vm.name = 'Login';

    vm.loggedIn = false;

    console.log(vm);
  }
}());
