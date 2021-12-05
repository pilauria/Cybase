const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

// list of products
app.get('/api/products', (req, res) => {
  //convert product.js in json file
  res.json(products);
});

// single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find(item => item._id === req.params.id);
  res.json(product);
});

app.listen(5000, console.log('Server running on port 5000'));
