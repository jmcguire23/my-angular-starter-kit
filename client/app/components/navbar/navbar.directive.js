(function() {
  'ngInject';
  angular.module('component.navbar')
  .directive('navBar', function(){
    return{
      scope: false,
      templateUrl: 'app/components/navbar/navbar.html'
    };
  });
}());
