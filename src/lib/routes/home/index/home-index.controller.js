import angular from 'angular';

class homeIndexRouteController {
  constructor(content) {
    this.content = content;
    console.log('controller hit', this)
  }
}

homeIndexRouteController.$inject = ['content'];

export var homeIndexRouteControllerModule = angular.module('homeIndexRouteControllerModule', [
  
  ]).controller('homeIndexRouteController', homeIndexRouteController)
;