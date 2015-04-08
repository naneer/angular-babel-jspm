import angular from 'angular';
import 'firebase';
import 'angularfire';

class Auth {
  constructor($firebaseAuth) {
    var ref = new Firebase("https://reenan.firebaseio.com/");
    return $firebaseAuth(ref);
  }
  
  static authFactory($firebaseAuth) {
    return new Auth($firebaseAuth);
  }
}

Auth.authFactory.$inject = ['$firebaseAuth'];

export var authModule = angular.module('authModule', [
  'firebase'
]).service('Auth', Auth.authFactory);
