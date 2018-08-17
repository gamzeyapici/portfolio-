(function () {
    'use strict';

    function HomeController($scope) {

    }
    angular.module('app')
        .component('home', {
            templateUrl: 'app/home/home.template.html',
            controller: ['$scope', HomeController]
        })
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                template: '<home></home>'
            });
        }]);




            //  $scope(document).ready(function () {
            //      $scope('#education').scroll(function () {
            //          $scope('h5').css('display', 'inline').fadeInLeft(1000);
            //  });
            //  });
        
       
      
         


})();