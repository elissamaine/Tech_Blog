const { BlogPost } = require('../models');

const blogPostData = [
  {
    title: 'My First BlogPost',
    content: 'This is my first blogpost. I hope you like it!',
    user_id: 5,
  }, 
  {
    title: 'MVC is cool',
    content: 'this is a blogpost about MVC written on an application what follows an MVC design pattern',
    user_id: 3,
  }, 
  {
    title: 'Tech BlogPost',
    content: 'tech blogpost content',
    user_id: 1
  },
];

const seedBlogPosts = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPosts;