import angular from 'angular';

class homeIndexController {
  constructor(content) {
    this.content = content;
    console.log('controller hit', this)
  }
}

homeIndexController.$inject = ['content'];

export var homeIndexControllerModule = angular.module('homeIndexControllerModule', [
  
  ]).controller('homeIndexController', homeIndexController)
;