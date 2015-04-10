import angular from 'angular';
import 'angular-ui-router';

import {loginRouteModule} from 'lib/routes/login/login.route';
import {joinRouteModule} from 'lib/routes/join/join.route';

export var mainRunModule = angular.module('mainRunModule', [
  'ui.router',
  loginRouteModule.name,
  joinRouteModule.name
]).run([
  '$rootScope',
  '$state',
  function($rootScope, $state){
    $rootScope.$on('$stateChangeError', function $stateChangeError(event, toState, toParams, fromState, fromParams, error){
      if (error === 'AUTH_REQUIRED') {
        $state.go('login');
      }
    })
  }
])
;