import angular from 'angular';

class homeCardController{
  constructor() {
    console.log('this', this);
  }
}

export var homeCardControllerModule = angular.module('homeCardControllerModule', [
  
  ]).controller('homeCardController', homeCardController)
;