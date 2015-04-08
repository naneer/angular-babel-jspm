import angular from 'angular';

import {authModule} from 'lib/services/auth/auth';

const AUTH = new WeakMap();
class loginRouteController {
  constructor(currentUser, Auth){
    //if(currentUser !== null) { console.log('user already logged in')};
    this.username = '';
    this.password = '';
    console.log('constructor auth', Auth);
    AUTH.set(this, Auth)
  }
  
  login() {
    AUTH.get(this).$authWithPassword({
      email: this.username,
      password: this.password
    }).then(function(authData){
      console.log('user logged in', authData);
    }).catch(function(error){
      console.error('Authentication Failed', error);
    });
  }
}

loginRouteController.$inject = ['currentUser', 'Auth'];

export var loginRouteControllerModule = angular.module('loginRouteControllerModule', [
  authModule.name
]).controller('loginRouteController', loginRouteController);