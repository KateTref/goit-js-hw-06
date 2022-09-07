let counterValue = 0;

const refs = {
    decrementNumber: document.querySelector('[data-action="decrement"]'),
    incrementNumber: document.querySelector('[data-action = "increment"]'),
    valueNumberEl: document.querySelector('#value'),
}

refs.decrementNumber.addEventListener('click', substractNumber);
refs.incrementNumber.addEventListener('click', addNumber);

function substractNumber() {
    counterValue -= 1;
    refs.valueNumberEl.textContent = counterValue;
};

function addNumber() {
    counterValue += 1;
    refs.valueNumberEl.textContent = counterValue;
};

 