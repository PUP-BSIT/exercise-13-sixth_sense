function validateInput() {
const inputField = document.getElementById("comment");
const nameField = document.getElementById("name");
const submitBtn = document.getElementById("submit_btn");

const isValid = (field) => field.value.trim().length > 0;

const enableSubmit = isValid(inputField) && isValid(nameField);
submitBtn.disabled = !enableSubmit;

submitBtn.classList.toggle('enabled', enableSubmit);
}

document.getElementById("comment").addEventListener('input', validateInput);
document.getElementById("name").addEventListener('input', validateInput);