#!/usr/bin/env node

if (process.argv.length <= 2) {
  console.log('usage: readjson <file>');
  process.exit(1);
}

var fs = require('fs');
var path = require('path');

var jsonFile = process.argv[2];

fs.exists(jsonFile, function(exists) {
  fs.readFile(jsonFile,'utf8', function(err, data) {
    var obj = JSON.parse(data);
    console.log(obj);
  });
});