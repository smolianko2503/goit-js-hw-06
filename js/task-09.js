const textColor = document.querySelector('.color');
const resetColorBtn = document.querySelector('.change-color');

resetColorBtn.addEventListener('click', toResetColor);

function toResetColor() {
  const getColor = getRandomHexColor();
  document.body.style.backgroundColor = getColor;
  textColor.textContent = getColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


