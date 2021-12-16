import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Marco Sancho',
    email: 'marco@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Maria Lipuzzi',
    email: 'maria@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
