(function () {
    'use strict';

    function NavbarController($scope) {

    }
    angular.module('app')
        .component('navbar', {
            templateUrl: 'app/components/navbar/navbar.template.html',
            controller: ['$scope', NavbarController]
        });

        // function openNav() {
        //     document.getElementById("myNav").style.height = "100%";
        // }
        
        // function closeNav() {
        //     document.getElementById("myNav").style.height = "0%";
        // }



        function openNav() {
            document.getElementById("myNav").style.height = "100%";
        }
        
        function closeNav() {
            document.getElementById("myNav").style.height = "0%";
        }
})();