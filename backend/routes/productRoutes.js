import express from 'express';
import asyncHandler from 'express-async-handler'; // to handle try/catch and not to write evertime (https://www.npmjs.com/package/express-async-handler)
const router = express.Router();
import Product from '../models/productModel.js';

// @desc   Fetch all products  (root:api/products)
// @route  GET /api/products
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    //convert product.js in json file
    res.json(products);
  })
);

// @desc   Fetch single product
// @route  GET /api/products/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      // what has to happen for this to fire off is that it has to be an actual formatted object ID, but just not one that's in the database.
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

// express-async-handler
export default router;

// a middleware is a unction that as access to the req,res cicle
