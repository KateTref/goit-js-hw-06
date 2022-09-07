const refs = {
    inputEl: document.querySelector('#font-size-control'),
    spanEl: document.querySelector('#text'),
}


refs.inputEl.addEventListener('input', changeFont);

function changeFont() {
    const fontValue = refs.inputEl.value;
    refs.spanEl.style.fontSize = fontValue + 'px';
};