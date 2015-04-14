import angular from 'angular';

class recipesCreateServingsController {
  constructor(){
    this.servings = 0;
  }
  
  addServings(value){
    this.servings = value;
  }
 
  setServingsManual(){
    if (!this.manualForm.$valid) return;
    this.servings = this.manualServings;
    if (this.servings <= 0) this.servings = 0;
  }
}

export var recipesCreateServingsControllerModule = angular.module('recipesCreateServingsControllerModule', [
  
]).controller('recipesCreateServingsController', recipesCreateServingsController);