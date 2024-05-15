let comments = [];

function checkComment() {
  const userName = document.getElementById("user_name").value;
  const userComment = document.getElementById("user_comment").value;
  const commentButton = document.getElementById("comment_button");

  commentButton.disabled = !(userName && userComment);
}

function addComment() {
  const userName = document.getElementById("user_name").value;
  const userComment = document.getElementById("user_comment").value;
  const timestamp = new Date().toISOString();

  const comment = {
    name: userName,
    text: userComment,
    date: timestamp,
  };

  comments.push(comment);
  displayComments();
  clearForm();
}

function clearForm() {
  document.getElementById("user_name").value = "";
  document.getElementById("user_comment").value = "";
  document.getElementById("comment_button").disabled = true;
}

function displayComments() {
  const commentsList = document.getElementById("comments_list");
  commentsList.innerHTML = comments
    .map(
      (comment) => `<div class="comment-item">
      <div>
        <span class="comment-author">${comment.name}</span>&nbsp;
        <span class="comment-date">${new Date(comment.date).toLocaleString()}
      </span>
      </div>
      <p class="comment-text">${comment.text}</p></div>`).join("");
}

function sortComments(order) {
  comments.sort((a, b) =>
    order === "asc"
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date)
  );
  displayComments();
}

function handleSortChange() {
  const sortOrder = document.getElementById("sort_dropdown").value;
  sortComments(sortOrder);
}
