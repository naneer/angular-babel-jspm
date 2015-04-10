import angular from 'angular';
import 'angular-ui-router';


import {authModule} from 'lib/services/auth/auth';

const AUTH = new WeakMap();
const STATE = new WeakMap();
class joinRouteController{
  constructor(Auth, $state){
    AUTH.set(this, Auth);
    STATE.set(this, $state);
  }
  join(){
    if(!this.form.$valid){
      console.log(this.form);
      return console.log('Please correct non-valid input');
    }
    AUTH.get(this).$createUser({
      email: this.email,
      password: this.password
    }).then(function(userData){
        console.log("User created successfully", userData);
        AUTH.get(this).$authWithPassword({
          email: this.email,
          password: this.password
        }).then(function(authData){
          console.log("logged in", authData);
        }).catch(function(error){
          console.log("err", error);
        });
    }).catch(function(error){
        console.log("Error Occurred", error);
    });
  }
}

joinRouteController.$inject = ['Auth', '$state'];

export var joinRouteControllerModule = angular.module('joinRouteControllerModule', [
  'ui.router',
  authModule.name
]).controller('joinRouteController', joinRouteController)
;