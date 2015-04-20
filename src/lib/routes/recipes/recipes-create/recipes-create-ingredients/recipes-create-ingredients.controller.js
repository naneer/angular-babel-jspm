import angular from 'angular';

class recipesCreateIngredientsRouteController {
  constructor(){
    this.measurementUnit = {};
    
    this.decimals = [0.25, 0.33, 0.50, 0.66, 0.75];
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
    return this._wholeNumber;
  }
  
  set wholeNumber(value) {
    this._wholeNumber = Math.floor(value);
  }
  
  get partNumber() {
    return this._partNumber;
  }
  
  set partNumber(value) {
    value = value % 1;
    this._partNumber = value;
    this._selectNumber = value;
  }
  
  get dirtyNumber() {
    return this._dirtyNumber;
  }
  
  set dirtyNumber(value) {
    this.wholeNumber = value;
    this.partNumber = value;
    this._dirtyNumber = value;
  }
  
  get selectNumber(){
    return this._selectNumber;
  }
  
  set selectNumber(value){
    this._selectNumber = value;
    this.dirtyNumber = this.wholeNumber + value;
  }
 
}

recipesCreateIngredientsRouteController.$inject = [];

export var recipesCreateIngredientsRouteControllerModule = angular.module('recipesCreateIngredientsRouteControllerModule', [
  
]).controller('recipesCreateIngredientsRouteController', recipesCreateIngredientsRouteController)
;