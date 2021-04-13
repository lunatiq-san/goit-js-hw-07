// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
  input: document.querySelector('input').value,
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  listContainer: document.getElementById('boxes'),
};

// let currentValue = refs.input.value;
console.log('refs.input.value', refs.input);

refs.renderBtn.addEventListener('click', onBtnGetAmount);
refs.destroyBtn.addEventListener('click', onBtnClearAmount);

function onBtnGetAmount() {}

function onBtnClearAmount() {
  refs.listContainer.innerHTML = '';
}

function createBoxes(amount) {
  const newDiv = document.createElement('div');
  refs.listContainer.append(newDiv);
}

function destroyBoxes() {}

createBoxes(2);
