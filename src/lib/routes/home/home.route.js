import angular from 'angular';
import 'angular-ui-router';

import {homeIndexRouteModule} from './index/home-index.route';
import template from './home.template.html!text';

export var homeRouteModule = angular.module('homeRouteModule', [
  'ui.router',
  homeIndexRouteModule.name
]).config([
  '$stateProvider',
  function homeRoute($stateProvider){
    $stateProvider.state('home', {
      abstract: true,
      views: {
        'home': {
          template: template
        }
      }
    });
  }
]);