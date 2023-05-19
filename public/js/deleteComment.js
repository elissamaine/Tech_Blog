const deleteComment = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (event.target.hasAttribute('data-id')) {
    const commentId = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

document.querySelector('.delete-comment-btn').addEventListener('click', deleteComment);