import angular from 'angular';

class recipesCreateIngredientsRouteController {
  constructor(){
    this.measurementUnit = {};

    this.fractions = [
      {'name': '1/4', value: 0.25},
      {'name': '1/3', value: 0.33},
      {'name': '1/2', value: 0.5 },
      {'name': '2/3', value: 0.66},
      {'name': '3/4', value: 0.75}
    ];
    this.measurements = [
      {'name': 'teaspoon', 'shortname': 'tsp'},
      {'name': 'tablespoon', 'shortname': 'tbsp'},
      {'name': 'fluid ounce', 'shortname': 'fl oz'},
      {'name': 'cup', 'shortname': 'cup'},
      {'name': 'pint', 'shortname': 'pt'},
      {'name': 'quart', 'shortname': 'qt'},
      {'name': 'gallon', 'shortname': 'gal'},
      {'name': 'milliliter', 'shortname': 'ml'},
      {'name': 'liter', 'shortname': 'l'},
      {'name': 'pound', 'shortname': 'lb'},
      {'name': 'ounce', 'shortname': 'oz'},
      {'name': 'milligram', 'shortname': 'mg'},
      {'name': 'gram', 'shortname': 'g'},
      {'name': 'kilogram', 'shortname': 'kg'},
      {'name': 'inch', 'shortname': 'in'},
      {'name': 'millimeter', 'shortname': 'mm'},
      {'name': 'centimeter', 'shortname': 'cm'},
      {'name': 'meter', 'shortname': 'm'}      
    ]
  }
  
  get wholeNumber() {
    return Math.floor(this.dirtyNumber);
  }
  
  get partNumber() {
    return this.dirtyNumber % 1;
  }
}

recipesCreateIngredientsRouteController.$inject = [];

export var recipesCreateIngredientsRouteControllerModule = angular.module('recipesCreateIngredientsRouteControllerModule', [
  
]).controller('recipesCreateIngredientsRouteController', recipesCreateIngredientsRouteController)
;