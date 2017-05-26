/**
 * Created by Kshitij Bahul on 16-05-2017.
 */
'use strict';
import angular from 'angular';
import RoutesConfig from './config/invoiceManager.config';
import LandingPageController from './controller/landingPageController';
import StateCard from '../components/StateCard/stateCard';
let invoiceManager = angular.module('invoiceManagerApp',['ui.router','ui.bootstrap','chart.js','ui.odometer','ngMaterial','ui.select','ngSanitize']);

//Configure Global Constants 
invoiceManager.constant('_',window._);

//Configure routes

invoiceManager.config(RoutesConfig);
invoiceManager.controller('landingPageController',LandingPageController);
invoiceManager.component('stateCard',StateCard);

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

