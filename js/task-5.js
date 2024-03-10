function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('button.change-color');
const body = document.querySelector('body');
const spanText = document.querySelector('span.color');
const handleClick = () => {
  body.style.backgroundColor = getRandomHexColor();
  spanText.textContent = `${getRandomHexColor()}`;
};

button.addEventListener('click', handleClick);
