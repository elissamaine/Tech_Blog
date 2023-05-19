const updatePost = async (event) => {
  event.preventDefault();
  console.log('updatePost function is running');

  const postTitle = document.querySelector('#title-input').value.trim();
  const postContent = document.querySelector('#content-input').value.trim();
  const postId = event.target.getAttribute('data-id');

  if (postTitle && postContent) {
    postData = {
      title: postTitle,
      content: postContent,
    }
  } else {
    alert('Please enter a title and content for your blog post.');
  }

  const response = await fetch(`/api/blogposts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify(postData),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace(`/blogpost/${postId}`);
  } else {
    alert(response.statusText);
    
  }
};

document.querySelector('#updated-btn').addEventListener('click', updatePost);