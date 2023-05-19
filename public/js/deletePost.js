const deletePost = async (event) => {
  event.preventDefault();
  event.stopPropagation();
  console.log('deletePost.js');

  if (event.target.hasAttribute('data-id')) {
    const postId = event.target.getAttribute('data-id');
    console.log(postId);

    const response = await fetch(`/api/blogposts/${postId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

const deletePostBtns = document.querySelectorAll('.delete-post-btn');

deletePostBtns.forEach((button) => {
  button.addEventListener('click', deletePost);
});