import angular from 'angular';

class Recipe {
  constructor() {
    this._servings = 0;
    this._ingredients = {};
  }
  
  get servings(){
    return this._servings;
  }
  
  set servings(value){
    this._servings = value;
  }
  
  static recipeFactory() {
    return new Recipe();
  }
}

Recipe.recipeFactory.$inject = [];

export var recipeModule = angular.module('recipeModule', [
  
]).factory('Recipe', Recipe.recipeFactory)
;