function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function destroyBoxes() {
  boxes.innerHTML = '';
}

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    boxes.insertAdjacentHTML('beforeend', `<div class="box"></div>`);
    const boxArr = document.querySelectorAll('.box');
    boxArr[i].style.width = `${size}px`;
    boxArr[i].style.height = `${size}px`;
    boxArr[i].style.backgroundColor = getRandomHexColor();
    size += 10;
  }
}

const handleClickCreate = () => {
  const input = document.querySelector('input');
  const inputValueNumber = Number(input.value);
  if (inputValueNumber < 1 || inputValueNumber > 100) {
    input.value = '';
    return;
  }

  destroyBoxes();

  createBoxes(inputValueNumber);
  input.value = '';
};

const handleClickDestroy = () => {
  destroyBoxes();
};

createButton.addEventListener('click', handleClickCreate);
destroyButton.addEventListener('click', handleClickDestroy);

destroyButton.classList.add('destroy-btn');
