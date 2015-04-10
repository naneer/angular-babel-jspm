import angular from 'angular';
import 'angular-ui-router';

import {inputMatchComponentModule} from 'lib/components/input-match/input-match.directive';
import {joinRouteControllerModule} from './join.controller';
import template from './join.template.html!text';

export var joinRouteModule = angular.module('joinRouteModule', [
  'ui.router',
  inputMatchComponentModule.name,
  joinRouteControllerModule.name
]).config([
  '$stateProvider',
  function joinRoute($stateProvider){
    $stateProvider.state('join', {
      url: '/join',
      views: {
        'site-content': {
          template: template,
          controllerAs: 'ctrl',
          controller: 'joinRouteController'
        }
      }
    })
  }
])
;