import angular from 'angular';

export var inputMatchComponentModule = angular.module('inputMatchComponentModule', [
  
]).directive('inputMatch', [
  '$parse',
  function inputMatchDirective($parse){
    return {
      strict: 'A',
      require: 'ngModel',
      link: function inputMatchLink(scope, ele, attrs, ctrl) {     
        var password;

        scope.$watch(attrs.inputMatch, function(newValue, oldValue){
          password = newValue;
          ctrl.$$parseAndValidate();
        });
        
        ctrl.$validators.inputMatch = function(modelValue, viewValue) {
          return viewValue === password;
        }
      }
    }
  }
])
;