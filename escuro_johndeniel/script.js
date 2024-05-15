let comments = [];

function validateInput() {
  let inputField = document.querySelector("#comment");
  let nameField = document.querySelector("#name");
  let submitBtn = document.querySelector("#submit-btn");

  if (inputField.value.trim().length && nameField.value.trim().length) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function addComment() {
  let nameField = document.querySelector("#name");
  let commentField = document.querySelector("#comment");
  let commentList = document.querySelector("#comment-list");

  let comment = {
    name: nameField.value.trim(),
    text: commentField.value.trim(),
    date: new Date(),
  };

  comments.push(comment);
  renderComments();

  nameField.value = "";
  commentField.value = "";
  document.querySelector("#submit-btn").disabled = true;
}

function renderComments() {
  let commentList = document.querySelector("#comment-list");
  commentList.innerHTML = "";

  comments.forEach((comment) => {
    let li = document.createElement("li");
    li.textContent = ` ${comment.name}: ${
      comment.text
    } (${comment.date.toLocaleString()})`;
    commentList.appendChild(li);
  });
}

function sortComments(ascending) {
  comments.sort((a, b) => {
    if (ascending) {
      return a.date - b.date;
    } else {
      return b.date - a.date;
    }
  });

  renderComments();
}
