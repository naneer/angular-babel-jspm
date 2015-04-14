import angular from 'angular';
import 'angular-ui-router';

import {authRequiredRouteModule} from '../auth-required.route';
import {recipesCreateRouteModule} from './recipes-create/recipes-create.route';

import template from './recipes.template.html!text';

export var recipesRouteModule = angular.module('recipesRouteModule',[
  'ui.router',
  authRequiredRouteModule.name,
  recipesCreateRouteModule.name
]).config([
  '$stateProvider',
  function recipesRoute($stateProvider){
    $stateProvider.state('authRequired.recipes', {
      url: '/recipes',
      views: {
        '': {
          template: template
        }
      }
    });
  }
])
;