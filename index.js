#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
(function() {

  var Paths = ['public', 'private', 'tests', 'client/compatibility', 'server/lib', 'client/lib'];
  var filePath = [
    'settings.json', 'mobile-config.js', 'lib/methods.js', 'lib/constants.js',
    'client/lib/helpers.js', 'client/body.html', 'client/head.html', 'client/style.css',
    'server/lib/permissions.js', 'server/publications.js'
  ];

  var currentPath = path.resolve();
  var tmpArr = [];
  tmpArr = tmpArr.concat(Paths, filePath);
  for (var i = 0; i < tmpArr.length; i++) {
    if (tmpArr[i].indexOf('.') > 0) {
      mkFile(tmpArr[i]);
    } else {
      mkdir(tmpArr[i]);
    }
  }
})();

function mkdir(dir) {
  var dirname = path.dirname(dir);
  if (!fs.existsSync(dirname)) {
    mkdir(dirname);
  }
  if (!fs.existsSync(dir)) {
    console.log('create ' + dir + " success");
    fs.mkdirSync(dir, 0755);
  } else {
    return;
  }
}


function mkFile(filename) {
  fs.writeFile(filename, "", function(err) {
    if (err) {
      console.log('create ' + filename + " fail")
      return;
    }
    console.log('create ' + filename + " success");
    return;
  })

}
