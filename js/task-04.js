// 1) Объявляешь переменную счётчик и записываешь в неё 0.
// 2) Получаешь доступ ко всем элементам.
// 3) Создаёшь функции для увеличения и уменьшения счётчика, и записи полученного значения в спан для отображения на экране.
// 4) Вешаешь эти функции на событие клик на соответствующие кнопки.

const refs = {
  counterValue: document.querySelector('#value'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
};

const count = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

refs.incrementBtn.addEventListener('click', onIncrementBtnClick);
refs.decrementBtn.addEventListener('click', onDecrementBtnClick);

function onIncrementBtnClick() {
  count.increment();
  refs.counterValue.textContent = count.value;
}

function onDecrementBtnClick() {
  count.decrement();
  refs.counterValue.textContent = count.value;
}
