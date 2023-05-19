const postBlog = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector('#title-input').value.trim();
  const postContent = document.querySelector('#content-input').value.trim();
  let postData;

  if (title && content) {
    postData = {
      title: postTitle,
      content: postContent,
    }
  } else {
    alert('Please enter a title and content for your blog post.');
  }
  console.log(postData);

  const response = await fetch('/api/blogposts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: { 'Content-Type': 'application/json' },
  }); 

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert(response.statusText);
  }
};