import angular from 'angular';

import {recipeModule} from 'lib/services/recipe/recipe';

const RECIPE = new WeakMap();
class recipesCreateServingsRouteController {
  constructor(servings, Recipe){
    this.servings = servings;
    RECIPE.set(this, Recipe);
  }
  
  addServings(value){
    this.servings = value;
  }
 
  setServingsManual(){
    if (!this.manualForm.$valid) return;
    this.servings = this.manualServings;
    if (this.servings <= 0) this.servings = 0;
  }
  
  applyToRecipe(){
    RECIPE.get(this).servings = this.servings;
  }
}

recipesCreateServingsRouteController.$inject = ['servings', 'Recipe'];

export var recipesCreateServingsRouteControllerModule = angular.module('recipesCreateServingsRouteControllerModule', [
  recipeModule.name
]).controller('recipesCreateServingsRouteController', recipesCreateServingsRouteController);