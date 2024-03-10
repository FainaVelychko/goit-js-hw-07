function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('button.change-color');
const body = document.querySelector('body');
const spanText = document.querySelector('span.color');
const handleClick = () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanText.textContent = `${newColor}`;
};

button.addEventListener('click', handleClick);
