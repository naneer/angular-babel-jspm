import angular from 'angular';

class authRequiredRouteController {
  constructor(currentUser){
    this.currentUser = currentUser;
    console.log('this', this);
  }
}

authRequiredRouteController.$inject = ['currentUser'];
export var authRequiredRouteControllerModule = angular.module('authRequiredRouteControllerModule',[
  
]).controller('authRequiredRouteController', authRequiredRouteController);
