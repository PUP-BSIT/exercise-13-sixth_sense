function validateInput() {
  let nameInput = document.getElementById("name");
  let commentInput = document.getElementById("comment");
  let submitBtn = document.getElementById("submit_button");

  if (
    nameInput.value.trim().length > 0 &&
    commentInput.value.trim().length > 0
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const commentForm = document.getElementById("commentForm");
  const commentText = document.getElementById("commentText");
  const commentsList = document.getElementById("commentsList");
  const sortAsc = document.getElementById("sortAsc");
  const sortDesc = document.getElementById("sortDesc");

  let comments = [];

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = commentText.value.trim();
    if (text !== "") {
      const comment = {
        text: text,
        date: new Date(),
      };
      comments.push(comment);
      commentText.value = "";
      displayComments();
    }
  });

  sortAsc.addEventListener("click", () => {
    comments.sort((a, b) => new Date(a.date) - new Date(b.date));
    displayComments();
  });

  sortDesc.addEventListener("click", () => {
    comments.sort((a, b) => new Date(b.date) - new Date(a.date));
    displayComments();
  });

  function displayComments() {
    commentsList.innerHTML = "";
    comments.forEach((comment) => {
      const li = document.createElement("li");
      li.classList.add("comment");
      li.innerHTML = `
              <p>${comment.text}</p>
              <span class="comment-date">${comment.date.toLocaleString()}</span>
          `;
      commentsList.appendChild(li);
    });
  }
});
