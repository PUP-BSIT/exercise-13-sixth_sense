function checkComment() {
  let userName = document.getElementById("user_name");
  let userComment = document.getElementById("user_comment");
  let commentButton = document.getElementById("comment_button");

  if (userName.value.length > 0 && userComment.value.length > 0) {
    commentButton.disabled = false;
  } else {
    commentButton.disabled = true;
  }
}
