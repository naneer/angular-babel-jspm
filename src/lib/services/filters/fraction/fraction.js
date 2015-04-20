import angular from 'angular';

export var fractionFilterModule = angular.module('fractionFilterModule', [
]).filter('fraction', function() {
  return function(input) {
    if(!input) return;
    var numerator = input ,
        denominator = 1;
    var scaleup = Math.pow(10, input.toString().split('.')[1].length);
    numerator = Math.round(numerator * scaleup);
    denominator *= scaleup;
    
    var g = gcf(numerator, denominator);
    
    numerator /= g;
    denominator /= g;
    
    if (numerator === 33 && denominator === 100) {
      return '1/3';
    }
    if (numerator === 33 && denominator === 50) {
      return '2/3';
    }
    
    return numerator + '/' + denominator;
    
    function gcf(a, b) {
      var c;
      a = Math.abs(a);
      b = Math.abs(b);
      
      while (b) {
        c = a % b;
        a = b;
        b = c;
      }
      return a;
    }
    
  }
})
;