(function() {
  angular.module('app', [
      'app.core',
      'app.login',
      'app.home',
      'app.components',
      'app.services'
    ])
    .config(['$httpProvider', function($httpProvider) {
      /* @ngInject */
      $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
        return {
          response: function(response) {
            // do something on success
            console.log('Success');
            return response;
          },
          responseError: function(response) {
            if (response.status === 401)
              console.log('Fail');
              $location.url('/login');
            return $q.reject(response);
          }
        };
      }]);
    }]);

}());
