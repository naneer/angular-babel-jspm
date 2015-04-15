import angular from 'angular';
import 'angular-ui-router';

import {recipeModule} from 'lib/services/recipe/recipe';

class recipesCreateRouteController {
  constructor($state, currentRecipe, Recipe){
    this.test = "test";
  }
}

recipesCreateRouteController.$inject = ['$state', 'currentRecipe', 'Recipe'];

export var recipesCreateRouteControllerModule = angular.module('recipesCreateRouteControllerModule', [
  'ui.router',
  recipeModule.name
]).controller('recipesCreateRouteController', recipesCreateRouteController)
;