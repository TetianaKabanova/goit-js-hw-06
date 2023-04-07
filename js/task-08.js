const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  console.log(formElements);

  const email = formElements.email;
  const password = formElements.password;
  const formData = {
    email,
    password,
  };

  if (email.value === "" || password.value === "") {
    alert("Увага! Заповніть усі поля форми");
  } else {
    alert("Чудово! Усі дані заповнені, форма відправлена!");
    console.log("Форма має email ${email.value} та пароль ${password.value}");
  }
  console.log(formData);
  form.reset();
}

// const formReset = document.querySelector(".login-form").reset();
// formData.forEach((name, value) => {
//   console.log("onFormSubmit -> name", name);
//   console.log("onFormSubmit -> value", value);
// });
// const formData = new FormData(event.currentTarget);
// console.log(formData);
