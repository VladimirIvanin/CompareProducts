/* global $, Compare */

var render = require('./render');

function binding() {
  var self = this;

  bindAdd(self);
  bindRemove(self);
  bindTrigger(self);
}
/**
 * удаляем из сравнения
 */
function bindRemove(self) {
  var $target = getDataAttrName(self.options.selectors.remove);

  $(document).on('click', $target, function(event) {
    event.preventDefault();
    self.productIds = self.api.getCompareIds();

    var id = $(this).data(self.options.selectors.remove);
    var statusProduct = getStatusProduct(
      $(this), self.productIds,
      id,
      self.options.classes.added,
      self.options.classes.notAdded
    );

    if (!statusProduct.isActive && statusProduct.notAdded) {
      return;
    }

    var $targets = render.getAllSelectors(self.options, [id]);

    self.api.remove(id, $targets.added);

  });
}

/**
 * добавляем в сравнение
 */
function bindAdd(self) {
  var $target = getDataAttrName(self.options.selectors.add);
  $(document).on('click', $target, function(event) {
    event.preventDefault();
    self.productIds = self.api.getCompareIds();
    var CompareStatus = self.api.getCompare();

    var id = $(this).data(self.options.selectors.add);
    var statusProduct = getStatusProduct(
      $(this), self.productIds,
      id,
      self.options.classes.added,
      self.options.classes.notAdded
    );

    if (statusProduct.isActive && statusProduct.isAdded) {
      return;
    }

    if (self.productIds.length > CompareStatus.maxItems) {
      return;
    }

    var $targets = render.getAllSelectors(self.options, [id]);

    self.api.add(id, $targets.added);

  });
}

/**
 * добавляем/удаляем
 */
function bindTrigger(self) {
  var $target = getDataAttrName(self.options.selectors.trigger);

  $(document).on('click', $target, function(event) {
    event.preventDefault();
    var CompareStatus = self.api.getCompare();
    self.productIds = self.api.getCompareIds();

    var id = $(this).data(self.options.selectors.trigger);
    var statusProduct = getStatusProduct(
      $(this), self.productIds,
      id,
      self.options.classes.added,
      self.options.classes.notAdded
    );

    if (statusProduct.isActive) {
      var $targets = render.getAllSelectors(self.options, [id]);
      self.api.remove(id, $targets.added);
    }else{
      if (self.productIds.length > CompareStatus.maxItems) {
        return;
      }
      var $targets = render.getAllSelectors(self.options, [id]);

      self.api.add(id, $targets.added);
    }

  });
}

function getStatusProduct ($target, productIds, id, addedClass, notAddedClass) {
  var status = {
    isActive: productIds.indexOf(id) > -1,
    isAdded: $target.hasClass(addedClass),
    notAdded: $target.hasClass(notAddedClass)
  }
  return status;
};

// Получить селектор data атрибута
function getDataAttrName(name, value) {
  var resultName = (value) ? name + '="'+value+'"' : name;

  return '[data-' + resultName + ']';
}

module.exports = binding;
