const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', toOutput);

function toOutput(event) {
    if (event.currentTarget.value !== '') {
       return  outputEl.textContent = event.currentTarget.value
    }
    if (event.currentTarget.value === '') { 
        return  outputEl.textContent = 'Anonymous'
    }
}
   



