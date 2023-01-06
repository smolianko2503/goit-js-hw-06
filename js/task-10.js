const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function getAmount() { 

  const amount = input.value;
  createBoxes(amount);
};

function createBoxes(amount) {
 
  const width = 30;
  const heigth = 30;

  for (let i = 0; i <= amount - 1; i += 1) {
    const box = [];
    const newBox = document.createElement("div");
    newBox.style.width = `${width + 10 * i}px`;
    newBox.style.height = `${heigth + 10 * i}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    box.push(newBox);

    console.log(box);
    boxes.append(...box);
  console.log(input.value)
  };
};

function destroyBoxes() { 
  boxes.innerHTML = '';
};
