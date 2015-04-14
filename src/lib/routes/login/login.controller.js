import angular from 'angular';
import 'angular-ui-router';

import {authModule} from 'lib/services/auth/auth';

const AUTH = new WeakMap();
const STATE = new WeakMap();

class loginRouteController {
  constructor(authData, Auth, $state){
    if( authData !== null) { console.log('user already logged in'); $state.go('authRequired.home.index'); }
    this.email = '';
    this.password = '';
    console.log('constructor auth', Auth);
    AUTH.set(this, Auth);
    STATE.set(this, $state);
  }
  
  login() {
    var state = STATE.get(this),
        ctrl = this;
    AUTH.get(this).$authWithPassword({
      email: this.email,
      password: this.password
    }).then(function(authData){
      console.log('user logged in', authData);
      state.go('authRequired.home.index');
    }).catch(function(error){
      ctrl.error = "Incorrect username or password";
    });
  }
}

loginRouteController.$inject = ['authData', 'Auth', '$state'];

export var loginRouteControllerModule = angular.module('loginRouteControllerModule', [
  'ui.router',
  authModule.name
]).controller('loginRouteController', loginRouteController);