/**
 * Created by Kshitij Bahul on 16-05-2017.
 */
'use strict';
/*angular.module('ui.odometer').config([
    'odometerOptionsProvider', function(odometerOptionsProvider) {
        odometerOptionsProvider.defaults = {
            duration : 3000,
            theme    : 'car',
            animation: 'count'
        };
    }
]);*/
var invoiceManager = angular.module('invoiceManagerApp',['ui.router','ui.bootstrap','chart.js','ui.odometer','ngMaterial','ui.select','ngSanitize']);

//Configure routes

invoiceManager.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: 'templates/landing-page.html'
        })
        .state('overview',{
            url: '/overview',
            templateUrl: 'templates/overview.html'
        });
    $urlRouterProvider.otherwise('/home');
});

//Configure Material Themes
invoiceManager.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  $mdThemingProvider.theme('dark-red').backgroundPalette('red').dark();
  $mdThemingProvider.theme('dark-green').backgroundPalette('green').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});

