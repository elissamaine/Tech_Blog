const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'This is a comment.',
    post_id: 1,
    user_id: 1,
  }, 
  {
    comment_text: 'Cool BlogPost!',
    post_id: 2,
    user_id: 2,
  }, 
  {
    comment_text: 'I agree!',
    post_id: 1,
    user_id: 5,
  }, 
  {
    comment_text: 'Some really interesting thoughts here.',
    post_id: 2,
    user_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;