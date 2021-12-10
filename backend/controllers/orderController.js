import asyncHandler from 'express-async-handler'; // to handle try/catch and not to write evertime (https://www.npmjs.com/package/express-async-handler)
import Order from '../models/orderModel.js';

// @desc   Create new order
// @route  POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  // check if orderItems is empty
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
    return;
  } else {
    // create a new order in the DB
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    // save the new instatiated Order in the DB
    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc   Get order by ID
// @route  GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
  // in addition to the order info we want to get the user name  & email associate with the order (populate)
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email '
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Sorry, 0rder not found');
  }
});

// @desc   Update order to paid
// @route  GET /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  // in addition to the order info we want to get the user name  & email associate with the order (populate)
  const order = await Order.findById(req.params.id);

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Sorry, 0rder not found');
  }
});

export { addOrderItems, getOrderById };
