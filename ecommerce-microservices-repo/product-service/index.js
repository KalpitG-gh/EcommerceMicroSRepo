const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

let products = [];

app.post('/products', (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).send(product);
});

app.get('/products', (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`Product service listening on port ${port}`);
});
