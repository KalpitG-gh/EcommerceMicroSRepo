const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

app.post('/orders', async (req, res) => {
  const order = req.body;
  
  // Call User Service to check if user exists
  const userExists = await axios.get('http://user-service:3000/users');
  if (!userExists.data.length) {
    return res.status(400).send('User does not exist');
  }
  
  // Call Product Service to check product availability
  const productExists = await axios.get('http://product-service:3001/products');
  if (!productExists.data.length) {
    return res.status(400).send('Product does not exist');
  }

  res.status(201).send(order);
});

app.listen(port, () => {
  console.log(`Order service listening on port ${port}`);
});
