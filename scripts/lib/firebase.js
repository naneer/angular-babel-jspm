#!/usr/bin/env node
/** 
    Adds rewrite rules to firebase.json for HTML5Mode(true) mode in Firebase Hosting.
    When accessing urls directly, example /login, you would get a 404 since the file
    doesn't actually exist. A rewrite is a server-side solution to move requests back
    to index.html for angular to handle.
**/

'use strict';

var fs = require('fs');

var argv = require('minimist')(process.argv.slice(2));

var options = {
  settingsFile: argv.f || argv.file
}

var defaultSettings = [
  {
    "source": "**",
    "destination": "index.html"
  }
]

function checkFile(settingsFile, callback) {
   if (!fs.existsSync(settingsFile)) {
      console.log('Firebase Json File not found. Exiting...');
      process.exit(1);
   }
   callback(settingsFile);
}

function readFile(settingsFile, callback){
  var settingsJSON = fs.readFileSync(settingsFile);
  var settings = JSON.parse(settingsJSON);
  callback(settingsFile, settings);
}

function addRewrites(settings){
  settings.rewrites = defaultSettings;
  return settings;
}
function writeFile(settingsFile, settings, callback){
  var settingsNew = addRewrites(settings);
  var settingsJSON = JSON.stringify(settingsNew, null, 2);
  fs.writeFileSync(settingsFile, settingsJSON);
  callback();
}

checkFile(options.settingsFile, function(settingsFile){
  readFile(settingsFile, function(settingsFile, settings){
    writeFile(settingsFile, settings, function(){
      console.log('Rewrites Added to Firebase JSON');
    });
  })
})