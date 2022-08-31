const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listContainer = document.querySelector('#ingredients');

const makeItems = elements => {
  return elements.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');

    return itemEl;
  })
};

const items = makeItems(ingredients);
listContainer.append(...items);
