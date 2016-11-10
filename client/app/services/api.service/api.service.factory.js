(function() {
  'ngInject';
  angular.module('services.api')
  .factory('apiFactory', apiFactory);

  apiFactory.$inject = ['$http'];

  function apiFactory($http) {

    var newPost = function() {
        // set payload
        var payload = mapFactory.geofence;

        // Console Debug
        console.log('POST payload', payload);

        // POST to API
        $http({
          method: 'POST',
          url: '/api/update',
          data: payload
        }).then(function successCallback(res){
          console.log('Success: Updated', res);
        }, function errorCallback(res){
          console.log('Error: failed', res);
        });

    };

    return {
      geofencePost: geofencePost
    };
  }
}());
