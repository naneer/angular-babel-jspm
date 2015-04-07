import angular from 'angular';

import {homeCardControllerModule} from './home-card.controller';
import template from './home-card.template.html!text';

export var homeCardComponentModule = angular.module('homeCardComponentModule', [
    homeCardControllerModule.name
  ]).directive('homeCard',[
    function homeCardDirective(){
      return {
        strict: 'E',
        template: template,
        controller: 'homeCardController',
        controllerAs: 'card',
        bindToController: true,
        scope: {
          header: '=',
          paragraph: '='
        }
      }
    }
  ])
;