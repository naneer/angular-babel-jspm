import angular from 'angular';
import 'angular-ui-router';

import {recipeModule} from 'lib/services/recipe/recipe';

const RECIPE = new WeakMap();
const STATE = new WeakMap();

class recipesCreateServingsRouteController {
  constructor(servings, Recipe, $state){
    this.servings = servings;
    RECIPE.set(this, Recipe);
    STATE.set(this, $state);
  }
  
  setServingsAndApply(value){
    this.servings = value;
    this.applyToRecipe();
  }
 
  setServingsManual(){
    if (!this.manualForm.$valid) return;
    this.servings = this.manualServings;
    if (this.servings <= 0) this.servings = 0;
  }
  
  applyToRecipe(){
    RECIPE.get(this).servings = this.servings;
    STATE.get(this).go('^.index');
  }
}

recipesCreateServingsRouteController.$inject = ['servings', 'Recipe', '$state'];

export var recipesCreateServingsRouteControllerModule = angular.module('recipesCreateServingsRouteControllerModule', [
  'ui.router',
  recipeModule.name
]).controller('recipesCreateServingsRouteController', recipesCreateServingsRouteController);