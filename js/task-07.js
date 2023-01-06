const inputVal = document.querySelector('#font-size-control');
const textVal = document.querySelector('#text');

inputVal.addEventListener('input', (event) => {
    const fontSize = event.currentTarget.value;
    textVal.style.fontSize = `${fontSize}px`;
})