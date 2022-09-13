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
  let randomHexColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = randomHexColor;
  refs.colorSpan.textContent = randomHexColor;
};