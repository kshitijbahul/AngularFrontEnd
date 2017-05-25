/**
 * Created by Kshitij Bahul on 17-05-2017.
 */
'use strict';
var app = angular.module('invoiceManagerApp');
//const colors = require('js/utils/color');
app.controller('landingPageController',function($scope,$http,$interval,_){
    $scope.overview ={};
    $scope.processingStates=[
        {"label":'Pending',"value":1234,"theme":"dark-grey"},
        {"label":'Pre-Processing',"value":1234,"theme":"dark-blue"},
        {"label":'Processing',"value":1234,"theme":"dark-orange"},
        {"label":'Merging',"value":1234,"theme":"dark-purple"},
        {"label":'Ready',"value":1234,"theme":"dark-green"},
        {"label":'Failed',"value":1234,"theme":"dark-red"}
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
        $scope.colors = ['#FF5500', '#A1D490','#00ADF9','#D792E8','#2B66B3'];
        $scope.name='Kshitij';
        $scope.processingInvoicesChart ={
            data: [90,40,30,10,20],
            labels : ['Oslo','Bergen','Stavanger','Flekkefjord','Farsund'],
            options: {legend: {display: true}}
        };
        $scope.processedInvoicesChartLabels = ['Processed','Total'];
        //$scope.divisionsByBrandChart =[90,10];
        $scope.divisionsByBrandChart = {
            data: [50,30,60,45,24],
            labels : ['FKAS','TKAS','BKK','FKAS','FKAS']
        };
        $scope.divisionsByBrandChartLabels = ['Processed','Total'];
        $scope.divisionsByLocationChart =[90,10];
        $scope.divisionsByLocationLabels = ['Processed','Total'];
        $scope.overview.selected = $scope.possibleOverviews[0];
    }
    
    $scope.testValueChange = 5400;
    $interval(function(){
        console.log('Came in here $interval',$scope.testValueChange);
        $scope.testValueChange = $scope.testValueChange+3;
        _.forEach($scope.processingStates, function(eachState){
            return eachState.value=eachState.value+3;
        });
    },10000)
});