const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/:id', (req, res) => {
  const { id } = req.params;

  if (typeof (id) === 'number') {
    return res.send(`Payment method for cart ${id}`);
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
