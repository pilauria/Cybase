import asyncHandler from 'express-async-handler'; // to handle try/catch and not to write evertime (https://www.npmjs.com/package/express-async-handler)
import User from '../models/userModel.js';

// @desc   Auth user & get token
// @route  POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  // get data from the body (see also postman {{URL/api/users/login}})
  const { email, password } = req.body;

  res.send(email, password);
});

export { authUser };
