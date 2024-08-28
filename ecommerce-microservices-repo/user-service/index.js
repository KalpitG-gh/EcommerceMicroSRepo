const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let users = [];

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).send(user);
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`User service listening on port ${port}`);
});
