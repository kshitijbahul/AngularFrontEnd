/**
 * Created by Kshitij Bahul on 16-05-2017.
 */

/*//var app = angular.module('invoiceManagerApp');

app.controller('mainController',function($scope,$http){
    $scope.init = function(){
      console.log('Here in mainController')  ;
    };
});*/
'use strict';
export default class MainController{
  constructor($scope){
    this.$scope = $scope;
    this.controllerName = 'MainController';
    console.log(`Here in mainController constructor : ${$scope}`);
  }
  init(){
     console.log('Here in mainController')  ;
  }
}
