import angular from 'angular';
import 'angular-ui-router';
import 'angular-messages';

import {authRequiredRouteModule} from '../../../auth-required.route';
import {recipesCreateServingsRouteControllerModule} from './recipes-create-servings.controller';
import template from './recipes-create-servings.template.html!text';
import {recipeModule} from 'lib/services/recipe/recipe';

export var recipesCreateServingsRouteModule = angular.module('recipesCreateServingsRouteModule', [
  'ui.router',
  'ngMessages',
  authRequiredRouteModule.name,
  recipesCreateServingsRouteControllerModule.name,
  recipeModule.name
]).config([
  '$stateProvider',
  function recipesCreateServingsRoute($stateProvider){
    $stateProvider.state('authRequired.recipes.create.servings', {
      url: '/servings',
      views: {
        '': {
          template: template,
          controllerAs: 'ctrl',
          controller: 'recipesCreateServingsRouteController'
        }
      },
      resolve: {
         servings: [
           'Recipe',
           function(Recipe){
             return Recipe.servings;
           }
         ]
      }
    });
  }
])
;