const deletePost = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (event.target.hasAttribute('data-id')) {
    const postId = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

document.querySelector('.delete-post-btn').addEventListener('click', deletePost);