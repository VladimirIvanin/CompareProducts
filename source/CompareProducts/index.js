/* global $, Compare */

var defaults = require('../variables').defaults;
var system = require('../variables').system;
var init = require('./init');
var api = require('./api');
var binding = require('./binding');

var CompareProducts = function (options) {
  var self = this;
  self.state = {
    productIds: []
  };

  self.options = $.extend(true, {}, defaults, options);

  self.api = api;
  self.init = init;
  self.binding = binding;

  if (!EventBus) {
    console.warn('Не подключен common.js');
  }else{
    self.init();
    self.binding();
  }

  return self;
};

module.exports = CompareProducts;
