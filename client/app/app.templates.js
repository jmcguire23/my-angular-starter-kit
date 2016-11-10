angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/components/navbar/navbar.html',
    "<nav class=\"navbar\">\n" +
    "  <div class=\"navbar__wrapper\">\n" +
    "    <div class=\"navbar__brand\">\n" +
    "      <a class=\"brand__logo\" href=\"/home\">\n" +
    "        Lorem Ipsum\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <ul class=\"navbar__links\">\n" +
    "      <li class=\"navbar__link\">\n" +
    "        <a href=\"/home\">Home</a>\n" +
    "      </li>\n" +
    "      <li class=\"navbar__link\">\n" +
    "        <a href=\"/about\">About</a>\n" +
    "      </li>\n" +
    "      <li class=\"navbar__link\">\n" +
    "        <a href=\"/contact\">Contact</a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</nav>\n"
  );


  $templateCache.put('app/views/home/home.html',
    "<div class=\"default__container\">\n" +
    "  <h1>Welcome - {{vm.name}}</h1>\n" +
    "</div>\n"
  );


  $templateCache.put('app/views/login/login.html',
    "<div class=\"default__container\">\n" +
    "  <h1>Please Login...</h1>\n" +
    "  <p>\n" +
    "    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "  </p>\n" +
    "</div>\n"
  );

}]);
