import angular from 'angular';
import 'angular-ui-router';

export var mainConfigModule = angular.module('mainConfigModule', [
  'ui.router'
]).config([
  '$urlRouterProvider',
  '$locationProvider',
  '$mdThemingProvider',
  function($urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $locationProvider.html5Mode(true);
    $mdThemingProvider.theme('default')
      .primaryPalette('blue');
  }
])