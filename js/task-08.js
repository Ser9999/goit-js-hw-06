
const loginForm = document.querySelector(".login-form");

const submitHandler = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповніть всі поля!");
  } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
  }
};

loginForm.addEventListener("submit", submitHandler);