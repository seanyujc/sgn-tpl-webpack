'use strict';

var merge = require("webpack-merge");
var _pro = require(__dirname + '/build/webpack/environments/production');
var _configs = {

  // global section
  global: require(__dirname + '/build/webpack/global'),

  // config by enviroments
  PRO: _pro,
  TEST: _pro,
  DEV: require(__dirname + '/build/webpack/environments/development')
};
var _load = function() {
  var ENV = process.env.NODE_ENV
    ? process.env.NODE_ENV
    : 'PRO';

  console.log('Current Environment: ', ENV);
  var _c = _configs && merge(
    _configs.global(__dirname),
    _configs[ENV](__dirname)
  );
  // console.log(_configs.global(__dirname));
  // console.log(_configs[ENV](__dirname));
  // console.log(_c)
  // load config file by environment
  return _c;
};
module.exports = _load();