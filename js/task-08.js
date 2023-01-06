const form = document.querySelector('.login-form');

form.addEventListener("submit", toLogin)

function toLogin(event) {
    event.preventDefault()

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = { email, password };

  console.log(formData);

  if (formElements.email.value === "" || formElements.password.value === "") {
    alert("Всі поля повинні бути заповнені !")
  } else { event.currentTarget.reset() };
}


