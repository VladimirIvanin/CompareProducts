# CompareProducts

```js
var _CompareProducts = new CompareProducts({
  counterTemplate: '(%c%)', // regexp %c%
  counterTemplateEmpty: null, // regexp %c%
  buttonNotAddedText: 'Добавить в сравнение', // текст не активной кнопки, передать null если не нужен текст
  buttonAddedText: 'Удалить из сравнения', // текст активной кнопки, передать null если не нужен текст
  onAdd: function (data) {
    alertify.success('Товар добавлен в сравнение');
  },
  onRemove: function (data) {
    alertify.message('Товар удален из сравнения');
  },
  onUpdate: function (data) {
    // обновление
  },
  onInit: function (data) {
    // инициализация
  },
  onOverload: function (data) {
    alertify.warning('Достигнуто максимальное количество сравниваемых товаров - ' + data.maxItems);
  }
});

// если нужно обновиться
_CompareProducts.update();
```

```twig
<button data-compares-trigger="{{ product.id }}">
  Кнопка триггер
</button>

<button data-compares-add="{{ product.id }}">
  Добавить
</button>

<button data-compares-remove="{{ product.id }}">
  Удалить
</button>

<div>
  Счетчик <span data-compares-counter></span>
</div>
```
