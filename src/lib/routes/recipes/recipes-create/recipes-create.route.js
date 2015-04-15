import angular from 'angular';
import 'angular-ui-router';

import {authRequiredRouteModule} from '../../auth-required.route';
import {recipesCreateRouteControllerModule} from './recipes-create.controller';
import {recipesCreateServingsRouteModule} from './recipes-create-servings/recipes-create-servings.route';
import {recipesCreateIndexRouteModule} from './recipes-create-index/recipes-create-index.route';
import template from './recipes-create.template.html!text';

export var recipesCreateRouteModule = angular.module('recipesCreateRouteModule', [
  'ui.router',
  authRequiredRouteModule.name,
  recipesCreateRouteControllerModule.name,
  recipesCreateServingsRouteModule.name,
  recipesCreateIndexRouteModule.name
]).config([
  '$stateProvider', 
  function recipesCreateRoute($stateProvider){
    $stateProvider.state('authRequired.recipes.create', {
      url: '/new',
      abstract: true,
      views: {
        'index': {
          template: template,
          controllerAs: 'ctrl',
          controller: 'recipesCreateRouteController'
        }
      },
      resolve: {
        currentRecipe: [
          function(){
            return "test";
          }
        ]
      }
    });
  }
])
;