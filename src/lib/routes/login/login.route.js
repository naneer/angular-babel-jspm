import angular from 'angular';
import 'angular-ui-router';

import template from './login.template.html!text';
import {loginRouteControllerModule} from './login.controller';
import {authModule} from 'lib/services/auth/auth';

export var loginRouteModule = angular.module('loginRouteModule', [
  'ui.router',
  authModule.name,
  loginRouteControllerModule.name
]).config([
  '$stateProvider',
  function loginRoute($stateProvider){
    $stateProvider.state('login', {
      url: '/login',
      views: {
        'site-content': {
          template: template,
          controllerAs: 'ctrl',
          controller: 'loginRouteController'
        }
      },
      resolve: {
        authData: [
          'Auth',
          function(Auth){
            console.log('login auth', Auth);
            return Auth.$waitForAuth();
          }
        ] 
      }
    });    
  }
])
;