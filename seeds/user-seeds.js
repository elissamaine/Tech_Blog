const { User } = require('../models');

const userData = [
  {
    username: 'Ben123',
    email: 'bbray@email.com',
    password: 'password123',
  },
  {
    username: 'GavinIsCool',
    email: 'gav@in.com',
    password: 'password123',
  }, 
  {
    username: 'JenIsCooler',
    email: '2cool4scool@aol.com',
    password: 'password123',
  }, 
  {
    username: 'GlitterCowboy',
    email: 'yeehaw@gmail.com',
    password: 'password123',
  }, 
  {
    username: 'Bobby',
    email: 'bigboybobby@hotmail.com',
    password: 'password123',
  }, 
  {
    username: 'DiscoDancer',
    email: 'justkeepdancin@gmail.com',
    password: 'password123',
  }, 
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;