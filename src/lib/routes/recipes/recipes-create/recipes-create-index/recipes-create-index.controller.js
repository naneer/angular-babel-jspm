import angular from 'angular';

class recipesCreateIndexRouteController {
  constructor(servings){
    this.servings = servings;
  }
}

recipesCreateIndexRouteController.$inject = ['servings'];

export var recipesCreateIndexRouteControllerModule = angular.module('recipesCreateIndexRouteControllerModule', [
  
]).controller('recipesCreateIndexRouteController', recipesCreateIndexRouteController)
;
