function add($target, options) {
  $target.addClass(options.classes.added).removeClass(options.classes.notAdded).removeClass(options.classes.disabled).removeAttr('disabled');
  $target.attr('title', options.titles.added);
  if (options.buttonAddedText) {
    $target.text(options.buttonAddedText)
  }
}

function remove($target, options) {
  var $add = $( getDataAttrName(options.selectors.add) );

  $target.addClass(options.classes.notAdded).removeClass(options.classes.added).removeClass(options.classes.disabled).removeAttr('disabled');
  $add.removeClass(options.classes.disabled).removeAttr('disabled');
  $target.attr('title', options.titles.notAdded);
  if (options.buttonNotAddedText) {
    $target.text(options.buttonNotAddedText)
  }
}

function update(data, options, productIds) {
  var $counter = $( getDataAttrName(options.selectors.counter) );
  var size = data.products.length;
  var _method = data.action.method;

  if (size && size > 0) {
    $counter.html(options.counterTemplate.replace( '%c%', size )).removeClass(options.classes.empty);
  }else{
    if (options.counterTemplateEmpty) {
      $counter.html(options.counterTemplateEmpty.replace( '%c%', size )).addClass(options.classes.empty);
    }else{
      $counter.html(options.counterTemplate.replace( '%c%', size )).addClass(options.classes.empty);
    }
  }

  if (_method == 'init') {
    var allSelectors = getAllSelectors(options, productIds);
    var $removed = allSelectors.removed;
    var $added = allSelectors.added;

    if (size && size > 0) {
      add($added, options);
    }

    remove($removed, options)
  }
}

function getAllSelectors(options, productIds) {
  var _added = [];
  var _all = [];
  _all.push( getDataAttrName(options.selectors.add));
  _all.push( getDataAttrName(options.selectors.remove));
  _all.push( getDataAttrName(options.selectors.trigger));
  for (var i = 0; i < productIds.length; i++) {
    _added.push( getDataAttrName(options.selectors.add, productIds[i]));
    _added.push( getDataAttrName(options.selectors.remove, productIds[i]));
    _added.push( getDataAttrName(options.selectors.trigger, productIds[i]));
  }

  var addedSelectors = _added.join(',');

  var $added = $(addedSelectors);
  var $removed = $(_all.join(',')).not(addedSelectors);

  return {
    added: $added,
    removed: $removed
  }
}

function overload(data, options) {
  var $add = $( getDataAttrName(options.selectors.add) );
  $add.addClass(options.classes.disabled).removeAttr('disabled')
}

// Получить селектор data атрибута
function getDataAttrName(name, value) {
  var resultName = (value) ? name + '="'+value+'"' : name;

  return '[data-' + resultName + ']';
}


module.exports = {
  'add': add,
  'remove': remove,
  'update': update,
  'getAllSelectors': getAllSelectors,
  'overload': overload
}
