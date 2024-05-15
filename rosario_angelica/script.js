function validateInput() {
  let nameInput = document.getElementById("name");
  let commentInput = document.getElementById("comment");
  let submitBtn = document.getElementById("submit_button");

  if (nameInput.value.trim().length > 0 && 
    commentInput.value.trim().length > 0) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}