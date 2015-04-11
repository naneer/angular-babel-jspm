import angular from 'angular';
import 'angular-ui-router';
import 'font-awesome';

import 'firebase';
import firebase from 'angularfire';

import template from './auth-required.template.html!text';
import {authRequiredRouteControllerModule} from './auth-required.controller';
import {authModule} from 'lib/services/auth/auth';

export var authRequiredRouteModule = angular.module('authRequiredRouteModule', [
  'ui.router',
  'firebase',
  authRequiredRouteControllerModule.name,
  authModule.name
]).config([
  '$stateProvider',
  function authRequiredRoute($stateProvider, $firebaseAuth){
    $stateProvider.state('authRequired', {
      abstract: true,
      views: {
        'site-header': {
          template: template,
          controllerAs: 'ctrl',
          controller: 'authRequiredRouteController'
        },
        'site-content': {
          template: '<ui-view></ui-view>'
        }
      },
      resolve: {
        currentUser: [
          'Auth',
          function(Auth) {
            console.log('auth', Auth.$requireAuth());
            return Auth.$requireAuth();
          }
        ]
      }
    });    
  }
])
;