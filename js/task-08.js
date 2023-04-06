const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email;
  const password = formElements.password;

  const formData = new FormData(event.currentTarget);
  console.log(formData);

  formData.forEach((name, value) => {
    console.log("onFormSubmit -> name", name);
    console.log("onFormSubmit -> value", value);
  });
  if (email.value === "" || password.value === "") {
    alert("Увага! Заповніть усі поля форми");
  } else {
    alert("Чудово! Усі дані заповнені, форма відправлена!");
  }
}

const formReset = document.querySelector(".login-form").reset();
