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
var invoiceManager = angular.module('invoiceManagerApp',['ui.router','ui.bootstrap','chart.js','ui.odometer']);

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



