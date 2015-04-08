import angular from 'angular';
import 'angular-ui-router';

import {authRequiredRouteModule} from '../auth-required.route';
import {homeIndexRouteModule} from './index/home-index.route';
import template from './home.template.html!text';

export var homeRouteModule = angular.module('homeRouteModule', [
  'ui.router',
  homeIndexRouteModule.name,
  authRequiredRouteModule.name
]).config([
  '$stateProvider',
  function homeRoute($stateProvider){
    $stateProvider.state('authRequired.home', {
      abstract: true,
      views: {
        '': {
          template: template
        }
      }
    });
  }
]);