/* global $, Compare */
/**
 * Добавляем товар в сравнение
 * @param {number} _item id товара
 */
function add(id, _button) {
  var task = {
    item: id
  }
  if (_button) {
    task.button = _button;
  }
  Compare.add(task);
}

/**
 * Удаляем товар из сравнения
 * @param {number} _item id товара
 */
function remove(id, _button) {
  var task = {
    item: id
  }
  if (_button) {
    task.button = _button;
  }
  Compare.remove(task);
}
/**
 * Обновляем состояние сравнения
 *
 */
function update() {
  Compare.update();
}
/**
 * Получение текущего состояния Сравнения
 * @return {object}
 */
function getCompare() {
  var result = Compare.getCompare();
  return result;
}

/**
 * Получение id товаров в сравнении
 */
function getCompareIds() {
  var ids = [];
  var _compares = Compare.getCompare();
  for (var i = 0; i < _compares.products.length; i++) {
    ids.push(_compares.products[i].id);
  }
  return ids;
}


module.exports = {
  'add': add,
  'remove': remove,
  'update': update,
  'getCompareIds': getCompareIds,
  'getCompare': getCompare
}
