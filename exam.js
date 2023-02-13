const express = require('express');
const app = express();
const port = 3000;

// API to do addition of list of numbers and return their sum
app.get('/addition', (req, res) => {
  const numbers = req.query.numbers;
  let sum = 0;

  if (numbers) {
    numbers.forEach(num => {
      sum += parseInt(num);
    });
    res.send({ sum });
  } else {
    res.status(400).send({ error: 'Please provide a list of numbers' });
  }
});

// API to do multiplication of an array of numbers and return the product
app.get('/multiplication', (req, res) => {
  const numbers = req.query.numbers;
  let product = 1;

  if (numbers) {
    numbers.forEach(num => {
      product *= parseInt(num);
    });
    res.send({ product });
  } else {
    res.status(400).send({ error: 'Please provide a list of numbers' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});