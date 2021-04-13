const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.getElementById('ingredients');

const makeListItems = array => {
  return array.map(value => {
    const listItemsRef = document.createElement('li');
    listItemsRef.textContent = value;

    return listItemsRef;
  });
};

const elements = makeListItems(ingredients);

ingredientsRef.append(...elements);
