import angular from 'angular';
import 'angular-ui-router';

import {authRequiredRouteModule} from '../../../auth-required.route';
import {recipesCreateIndexRouteControllerModule} from './recipes-create-index.controller';
import template from './recipes-create-index.template.html!text';

export var recipesCreateIndexRouteModule = angular.module('recipesCreateIndexRouteModule', [
  'ui.router',
  authRequiredRouteModule.name,
  recipesCreateIndexRouteControllerModule.name
]).config([
  '$stateProvider',
  function recipesCreateIndexRoute($stateProvider){
    $stateProvider.state('authRequired.recipes.create.index', {
      url: '',
      views: {
        '': {
          template: template,
          controllerAs: 'ctrl',
          controller: 'recipesCreateIndexRouteController'
        }
      }
    });
  }
])
;