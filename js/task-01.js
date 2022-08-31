const arrItemsEl = document.querySelectorAll('.item');

const getQuantityElem = function () {
    return arrItemsEl.length;
};

console.log(`Number of categories:`, getQuantityElem());

for (const elem of arrItemsEl) {
    const elemHeadEl = elem.querySelector('h2');
    console.log(`Category:`, elemHeadEl.textContent);
    const arrElements = elem.querySelectorAll('li');
    console.log(`Elements:`, arrElements.length); 
};