const postComment = async (event) => {
  event.preventDefault();

  const commentContent = document.querySelector('#comment-input').value.trim();

  if (!commentContent) {
    alert('Please enter a comment.');
  }
  console.log(commentContent);
  
  const response = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({ commentContent }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#Cbutton').addEventListener('click', postComment);