import angular from 'angular';
import 'angular-ui-router';

import {homeCardComponentModule} from 'lib/components/home-cards/home-card.directive';
import {homeIndexControllerModule} from './home-index.controller';
import template from './home-index.template.html!text';

export var homeIndexRouteModule = angular.module('homeIndexRouteModule', [
  'ui.router',
  homeCardComponentModule.name,
  homeIndexControllerModule.name
]).config([
  '$stateProvider',
  function homeRoute($stateProvider){
    $stateProvider.state('home.index', {
      url: '/',
      views: {
        'index': {
          template: template,
          controllerAs: 'ctrl',
          controller: 'homeIndexController'
        }
      },
      resolve: {
        content: function() {
          return { 
              card_0: {
                header: 'AngularJS',
                paragraph: 'The frontend of this site is created using  \
                            AngularJS and Angular-Material. \
                            It is based on the styleguide by GoCardless, \
                            please go check them out as the have a real nice structure that \
                            is easy to follow!'
              },
              card_1: {
                header: 'JSPM',
                paragraph: 'The package management and the dynamic modular loader used here is \
                            called JSPM. '
              },
              card_2: {
                header: 'Continous Integration',
                paragraph: 'Continous Integration'
              },
              card_3: {
                header: 'Testing',
                paragraph: 'e2e using protractor, unit using karma'
              }
          };
        }
      }
    })
  }
])