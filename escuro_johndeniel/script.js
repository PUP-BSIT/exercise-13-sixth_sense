function validateInput() {
  let inputField = document.getElementById("comment");
  let nameField = document.getElementById("name");
  let submitBtn = document.getElementById("submit-btn");

  if (inputField.value.trim().length > 0 && nameField.value.trim().length > 0) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
