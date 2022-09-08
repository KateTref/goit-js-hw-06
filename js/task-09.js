function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  colorSpan: document.querySelector('.color'),
  colorBtn: document.querySelector('.change-color'),
};

refs.colorBtn.addEventListener('click', changeColor);

function changeColor() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.colorSpan.textContent = getRandomHexColor();
};