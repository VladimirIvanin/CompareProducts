/* global $, Compare */
var render = require('./render');

function update() {
  var self = this;
  var data = self.state.data || {action: {method: 'init'}};
  var options = self.options;
  var ids = self.api.getCompareIds();
  render.update(data, options, ids);
  options.onUpdate(data);
}

module.exports = {
  'update': update
}
