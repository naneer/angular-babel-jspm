import angular from 'angular';

import {inputIngredientControllerModule} from './input-ingredient.controller';
import template from './input-ingredient.template.html!text';

export var inputIngredientComponentModule = angular.module('inputIngredientComponentModule', [
  inputIngredientControllerModule.name
]).directive('inputIngredient', [
  function inputIngredientDirective(){
    return {
        strict: 'E',
        template: template,
        controller: 'inputIngredientController',
        controllerAs: 'ctrl',
        bindToController: true,
        scope: {}
      }
    }
  ])
;