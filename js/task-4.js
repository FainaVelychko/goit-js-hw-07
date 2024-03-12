const formEl = document.querySelector('.login-form');

const handleSubmit = event => {
  event.preventDefault();
  const form = event.target;
  const userEmail = form.elements.email.value;
  const userPassword = form.elements.password.value;

  if (userEmail === '' || userPassword === '') {
    alert('All form fields must be filled in');
  } else {
    const userData = {
      email: userEmail.trim(),
      password: userPassword.trim(),
    };
    console.log(userData);
    form.reset();
  }
};

formEl.addEventListener('submit', handleSubmit);
