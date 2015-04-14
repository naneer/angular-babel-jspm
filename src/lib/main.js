import angular from 'angular';
import 'angular-material';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';

import {homeRouteModule} from './routes/home/home.route';
import {recipesRouteModule} from './routes/recipes/recipes.route';

import {mainConfigModule} from './config/main.config';
import {mainRunModule}  from './config/main.run';

export var mainModule = angular.module('mainModule', [
  'ngMaterial',
  'ngMessages',
  homeRouteModule.name,
  recipesRouteModule.name,
  mainConfigModule.name,
  mainRunModule.name
  ])
;
