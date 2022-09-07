const inputEl = document.querySelector('#validation-input');
const inputElLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', checkQuantitySymbols);


function checkQuantitySymbols(event) {
    const currentLength = event.currentTarget.value.length;

    if (currentLength === Number(inputElLength)) {
        inputEl.classList.add('valid');
    }
    else {
        inputEl.classList.add('invalid');
    }
}