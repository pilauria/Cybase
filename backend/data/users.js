import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ivan Drago',
    email: 'ivan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'George Steem',
    email: 'george@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Pietro Lauria',
    email: 'pietro@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
