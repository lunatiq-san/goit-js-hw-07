const listCategoriesRef = document.querySelector('#categories');

console.log(`В списке ${listCategoriesRef.children.length} категории.`);

const listItemsRef = document.querySelectorAll('.item');

const getInfo = list => {
  return list.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log(
      `     Количество элементов: ${item.querySelectorAll('li').length}`,
    );
  });
};

getInfo(listItemsRef);
