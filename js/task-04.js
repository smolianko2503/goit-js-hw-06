const toMinBtn = document.querySelector('[data-action="decrement"]');
const toAddBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value')

let counterValue = 0;

const plus = () => {
    counterValue += 1;
    counter.textContent = counterValue;
};

const minus = () => { 
    counterValue -= 1;
    counter.textContent = counterValue;
}

toMinBtn.addEventListener('click', minus);
toAddBtn.addEventListener('click', plus);



