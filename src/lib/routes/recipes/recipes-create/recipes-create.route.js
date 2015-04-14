import angular from 'angular';
import 'angular-ui-router';

import {authRequiredRouteModule} from '../../auth-required.route';
import {recipesCreateServingsRouteModule} from './recipes-create-servings/recipes-create-servings.route';

import template from './recipes-create.template.html!text';

export var recipesCreateRouteModule = angular.module('recipesCreateRouteModule', [
  'ui.router',
  authRequiredRouteModule.name,
  recipesCreateServingsRouteModule.name
]).config([
  '$stateProvider',
  function recipesCreateRoute($stateProvider){
    $stateProvider.state('authRequired.recipes.create', {
      url: '/new',
      views: {
        'index': {
          template: template
        }
      }
    });
  }
])
;