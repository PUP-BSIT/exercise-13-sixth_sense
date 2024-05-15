document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.getElementById('comment-Form');
  const commentText = document.getElementById('comment-Text');
  const commentsList = document.getElementById('comments-List');
  const sortAsc = document.getElementById('sort-Asc');
  const sortDesc = document.getElementById('sort-Desc');

  let comments = [];

  commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = commentText.value.trim();
      if (text !== '') {
          const comment = {
              text: text,
              date: new Date()
          };
          comments.push(comment);
          commentText.value = '';
          displayComments();
      }
  });

  sortAsc.addEventListener('click', () => {
      comments.sort((a, b) => new Date(a.date) - new Date(b.date));
      displayComments();
  });

  sortDesc.addEventListener('click', () => {
      comments.sort((a, b) => new Date(b.date) - new Date(a.date));
      displayComments();
  });

  function displayComments() {
      commentsList.innerHTML = '';
      comments.forEach(comment => {
          const li = document.createElement('li');
          li.classList.add('comment');
          li.innerHTML = `
              <p>${comment.text}</p>
              <span class="comment-date">${comment.date.toLocaleString()}</span>
          `;
          commentsList.appendChild(li);
      });
  }
});

function saveComments() {
  localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
  const storedComments = localStorage.getItem('comments');
  if (storedComments) {
      comments = JSON.parse(storedComments);
      displayComments();
  }
}

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = commentText.value.trim();
  if (text !== '') {
      const comment = {
          text: text,
          date: new Date()
      };
      comments.push(comment);
      commentText.value = '';
      displayComments();
      saveComments();
  }
});

sortAsc.addEventListener('click', () => {
  comments.sort((a, b) => new Date(a.date) - new Date(b.date));
  displayComments();
  saveComments();
});

sortDesc.addEventListener('click', () => {
  comments.sort((a, b) => new Date(b.date) - new Date(a.date));
  displayComments();
  saveComments();
});

// Load comments on page load
loadComments();