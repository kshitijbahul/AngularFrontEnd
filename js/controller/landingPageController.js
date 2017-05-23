/**
 * Created by Kshitij Bahul on 17-05-2017.
 */
'use strict';
var app = angular.module('invoiceManagerApp');
//const colors = require('js/utils/color');
app.controller('landingPageController',function($scope,$http,$interval){
    $scope.overview ={};
    $scope.processingStates=[
        {"label":'Pending',"value":123456,"theme":"dark-grey"},
        {"label":'Pre-Processing',"value":123456,"theme":"dark-blue"},
        {"label":'Processing',"value":123456,"theme":"dark-orange"},
        {"label":'Merging',"value":123456,"theme":"dark-purple"},
        {"label":'Ready',"value":123456,"theme":"dark-green"},
        {"label":'Failed',"value":123456,"theme":"dark-red"}
    ];
    $scope.possibleOverviews = [
        {
            "name":"Today",
        },
        {
            "name":"Last Hour"
        },
        {
            "name":"Yesterday"
        },
        {
            "name":"This Week"
        },
        {
            "name":"This Fortnight"
        },
        {
            "name":"This Month"
        },
    ]
    $scope.init = function(){
  //      console.log('colors here are ::',colors);
        $scope.colors = ['#FF5500', '#DCDCDC','#00ADF9'];
        $scope.name='Kshitij';
        $scope.processingInvoicesChart ={
            data: [90,40,30,10,20],
            labels : ['Oslo','Bergen','Stavanger','Flekkefjord','Farsund']
        };
        $scope.processedInvoicesChartLabels = ['Processed','Total'];
        //$scope.divisionsByBrandChart =[90,10];
        $scope.divisionsByBrandChart = {
            data: [40,50,60,70,24],
            labels : ['FKAS','TKAS','BKK','FKAS','FKAS']
        };
        $scope.divisionsByBrandChartLabels = ['Processed','Total'];
        $scope.divisionsByLocationChart =[90,10];
        $scope.divisionsByLocationLabels = ['Processed','Total'];
        $scope.overview.selected = $scope.possibleOverviews[0];
    }
    
    $scope.testValueChange = 123456;
    $interval(function(){
        console.log('Came in here $interval',$scope.testValueChange);
        $scope.testValueChange = $scope.testValueChange+3;
    },10000)
});