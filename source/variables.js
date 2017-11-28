var defaults = {
  selectors: {
    add: 'compares-add',
    remove: 'compares-remove',
    trigger: 'compares-trigger',
    counter: 'compares-counter'
  },
  counterTemplate: '(%c%)', // regexp %c%
  counterTemplateEmpty: null, // regexp %c%
  buttonNotAddedText: null, // текст не активной кнопки
  buttonAddedText: null, // текст активной кнопки
  titles: {
    added: 'Добавлен в сранение',
    notAdded: 'Добавить в сранение'
  },
  classes: {
    added: 'is-added',
    notAdded: 'not-added',
    empty: 'is-empty',
    disabled: 'is-disabled'
  },
  onAdd: function () {},
  onRemove: function () {},
  onUpdate: function () {},
  onInit: function () {},
  onOverload: function () {}
};

var system = {};

module.exports = {
  'defaults': defaults,
  'system': system
}
