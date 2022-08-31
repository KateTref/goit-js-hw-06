const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listContainer = document.querySelector('#ingredients');

const elements = ingredients.map(ingridient => {
const itemEl = document.createElement('li');
  itemEl.textContent = ingridient;
  itemEl.classList.add('item');

  return itemEl;
});

listContainer.append(...elements);
