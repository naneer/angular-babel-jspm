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
                img: '',
                header: 'Hello Planet!',
                paragraph: 'My name is Reenan. I\'m an aspiring developer. \
                            In the past, I\'ve built and worked on a number of apps and scripts \
                            for intranet applications in .NET, js, and python as a Desktop Support \
                            Specialist, typing away on my pc by myself, but I would like to focus \
                            my efforts building public facing applications in a collaborative environment. \
                            '
              }
          };
        }
      }
    })
  }
])