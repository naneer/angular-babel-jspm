import angular from 'angular';

class inputIngredientController {
  constructor() {
     this.units = [
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
    ];
  }
}

inputIngredientController.$inject = [];

export var inputIngredientControllerModule = angular.module('inputIngredientControllerModule', [
  
]).controller('inputIngredientController', inputIngredientController)
;