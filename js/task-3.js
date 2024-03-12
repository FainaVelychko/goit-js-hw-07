const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

const handleInput = event => {
  const trimmedInput = event.currentTarget.value.trim();
  if (trimmedInput === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimmedInput;
  }
};

nameInput.addEventListener('input', handleInput);
