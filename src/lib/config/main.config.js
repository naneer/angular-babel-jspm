import angular from 'angular';
import 'angular-ui-router';

export var mainConfigModule = angular.module('mainConfigModule', [
  'ui.router'
]).config([
  '$urlRouterProvider',
  '$locationProvider',
  function($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
  }
])