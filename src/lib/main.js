import angular from 'angular';
import 'angular-material';
import 'angular-animate';
import 'angular-aria';

import {homeRouteModule} from './routes/home/home.route';
import {mainConfigModule} from './config/main.config';

export var mainModule = angular.module('mainModule', [
  'ngMaterial',
  homeRouteModule.name,
  mainConfigModule.name
  ])
;
