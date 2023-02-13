const express = require('express');
const app = express();
const port = 3000;
//this is an api that will handle all requests about addition
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
//this is the api that will handle multiplication requests
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
