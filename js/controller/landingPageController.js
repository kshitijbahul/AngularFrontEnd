/**
 * Created by Kshitij Bahul on 17-05-2017.
 */
'use strict';
var app = angular.module('invoiceManagerApp');
//const colors = require('js/utils/color');
app.controller('landingPageController',function($scope,$http){
    $scope.init = function(){
  //      console.log('colors here are ::',colors);
        $scope.colors = ['#FF5500', '#DCDCDC','#00ADF9'];
        $scope.name='Kshitij';
        $scope.processingInvoicesChart ={
            data: [90,10],
            labels : ['Processed','Total']
        };
        $scope.processedInvoicesChartLabels = ['Processed','Total'];
        $scope.divisionsByBrandChart =[90,10];
        $scope.divisionsByBrandChartLabels = ['Processed','Total'];
        $scope.divisionsByLocationChart =[90,10];
        $scope.divisionsByLocationLabels = ['Processed','Total'];
    }

});