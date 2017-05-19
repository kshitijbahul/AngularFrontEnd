/**
 * Created by Kshitij Bahul on 17-05-2017.
 */

var app = angular.module('invoiceManagerApp');

app.controller('overviewController',function($scope,$http){
    $scope.init = function(){
        $scope.name='Kshitij';
    }
});