import angular from 'angular';
import 'angular-ui-router';

import {authRequiredRouteModule} from '../../../auth-required.route';
import {recipesCreateServingsControllerModule} from './recipes-create-servings.controller';
import template from './recipes-create-servings.template.html!text';

export var recipesCreateServingsRouteModule = angular.module('recipesCreateServingsRouteModule', [
  'ui.router',
  authRequiredRouteModule.name,
  recipesCreateServingsControllerModule.name
]).config([
  '$stateProvider',
  function recipesCreateServingsRoute($stateProvider){
    $stateProvider.state('authRequired.recipes.create.servings', {
      url: '/servings',
      views: {
        '': {
          template: template,
          controllerAs: 'ctrl',
          controller: 'recipesCreateServingsController'
        }
      }
    });
  }
])
;