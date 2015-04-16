import angular from 'angular';
import 'angular-ui-router';

import {authRequiredRouteModule} from '../../../auth-required.route';
import {recipesCreateIngredientsRouteControllerModule} from './recipes-create-ingredients.controller';
import template from './recipes-create-ingredients.template.html!text';

import {fractionFilterModule} from 'lib/services/filters/fraction/fraction';
import {recipeModule} from 'lib/services/recipe/recipe';

export var recipesCreateIngredientsRouteModule = angular.module('recipesCreateIngredientsRouteModule', [
  recipeModule.name,
  recipesCreateIngredientsRouteControllerModule.name,
  fractionFilterModule.name
]).config([
  '$stateProvider',
  function recipesCreateIngredientsRoute($stateProvider){
    $stateProvider.state('authRequired.recipes.create.ingredients', {
      url: '/ingredients',
      views: {
        '': {
          template: template,
          controllerAs: 'ctrl',
          controller: 'recipesCreateIngredientsRouteController'
        }
      }
    })
  }
])
;