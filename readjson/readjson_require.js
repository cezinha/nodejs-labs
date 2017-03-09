#!/usr/bin/env node

if (process.argv.length <= 2) {
  console.log('usage: readjson <file>');
  process.exit(1);
}

var fs = require('fs');
var path = require('path');

var jsonFile = process.argv[2];
if (jsonFile.indexOf('/') == -1) {
  jsonFile = './' + jsonFile;
}

var obj = require(jsonFile);
console.log(obj);
