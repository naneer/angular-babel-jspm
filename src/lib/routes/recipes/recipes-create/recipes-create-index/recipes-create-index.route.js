import angular from 'angular';
import 'angular-ui-router';

import {authRequiredRouteModule} from '../../../auth-required.route';
import {recipesCreateIndexRouteControllerModule} from './recipes-create-index.controller';
import template from './recipes-create-index.template.html!text';

import {inputIngredientComponentModule} from 'lib/components/input-ingredient/input-ingredient.directive';
import {recipeModule} from 'lib/services/recipe/recipe';

export var recipesCreateIndexRouteModule = angular.module('recipesCreateIndexRouteModule', [
  'ui.router',
  authRequiredRouteModule.name,
  recipesCreateIndexRouteControllerModule.name,
  inputIngredientComponentModule.name,
  recipeModule.name
]).config([
  '$stateProvider',
  function recipesCreateIndexRoute($stateProvider){
    $stateProvider.state('authRequired.recipes.create.index', {
      url: '',
      views: {
        '': {
          template: template,
          controllerAs: 'recipe',
          controller: 'recipesCreateIndexRouteController'
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