/* global $, Compare */
var render = require('./render');

function init() {
  var self = this;
  var options = self.options;

  EventBus.subscribe('update_items:insales:compares', function (data) {
    render.update(data, options, self.api.getCompareIds());
    options.onUpdate(data);
  });

  EventBus.subscribe('init:insales:compares', function (data) {
    render.update(data, options, self.api.getCompareIds());
    options.onInit(data);
  });

  EventBus.subscribe('overload:insales:compares', function (data) {
    render.overload(data, options);
    options.onOverload(data);
  });

  EventBus.subscribe('add_item:insales:compares', function (data) {
    var $button = (data.action) ? data.action.button : null;

    if ($button) {
      render.add($button, options);
    }
    options.onAdd(data);
  });

  EventBus.subscribe('remove_item:insales:compares', function (data) {
    var $button = (data.action) ? data.action.button : null;

    if ($button) {
      render.remove($button, options);
    }
    options.onRemove(data);
  });
}

module.exports = init;
