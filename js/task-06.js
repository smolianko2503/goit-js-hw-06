const inputValid = document.querySelector('#validation-input');

inputValid.addEventListener('blur', onInput);

inputValid.addEventListener('focus', onFocus);

function onFocus() {
    inputValid.classList.remove("valid");
    inputValid.classList.remove("invalid");
}

function onInput() { 
    if (Number.parseInt(inputValid.getAttribute('data-length')) === inputValid.value.length) {
       inputValid.classList.add("valid")
    } else 
    inputValid.classList.add("invalid")
}