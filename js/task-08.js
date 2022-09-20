

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", submitHandler);
function submitHandler(event) {
  event.preventDefault();
  console.dir(event.currentTarget);
  const { email, password } = event.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  event.currentTarget.reset();
}
