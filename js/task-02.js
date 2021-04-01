const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeListItems = array => {
  array.forEach(value => {
    const ingredientsRef = document.querySelector('#ingredients');
    const listItemsRef = document.createElement('li');
    listItemsRef.textContent = value;
    return ingredientsRef.appendChild(listItemsRef);
  });
};

makeListItems(ingredients);
