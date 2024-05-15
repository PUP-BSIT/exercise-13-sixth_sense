let comments = [];

function validateInput() {
  let inputField = document.getElementById("comment");
  let nameField = document.getElementById("name");
  let submitBtn = document.getElementById("submit-btn");

  if (!inputField.value.trim().length && !nameField.value.trim().length) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function addComment() {
  let nameField = document.getElementById("name");
  let commentField = document.getElementById("comment");
  let commentList = document.getElementById("comment-list");

  let comment = {
    name: nameField.value.trim(),
    text: commentField.value.trim(),
    date: new Date(),
  };

  comments.push(comment);
  renderComments();

  nameField.value = "";
  commentField.value = "";
  document.getElementById("submit-btn").disabled = true;
}

function renderComments() {
  let commentList = document.getElementById("comment-list");
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
