import angular from 'angular';
import 'angular-ui-router';


import {authModule} from 'lib/services/auth/auth';

const AUTH = new WeakMap();
const STATE = new WeakMap();

class joinRouteController{
  constructor(Auth, $state){
    AUTH.set(this, Auth);
    STATE.set(this, $state);
    this.loading = false;
  }
  
  join(){
    var ctrl = this;
    var email = ctrl.email,
        password = ctrl.password,
        auth = AUTH.get(ctrl),
        state = STATE.get(ctrl);
    
    if (!ctrl.form.$valid) return;
    
    ctrl.loading = true;
    
    auth.$createUser({
      email: email,
      password: password
    }).then(function(userData){
        console.log("User created successfully", userData);
        return auth.$authWithPassword({
          email: email,
          password: password
        });
    }).then(function(authData){
        console.log("User is logged in", authData);
        state.go('login');
    }).catch(function(error){
        console.log("Error Occurred", error);
        ctrl.error = error.message;
    }).then(function(){
        ctrl.loading = false;
    });
  }
}

joinRouteController.$inject = ['Auth', '$state'];

export var joinRouteControllerModule = angular.module('joinRouteControllerModule', [
  'ui.router',
  authModule.name
]).controller('joinRouteController', joinRouteController)
;