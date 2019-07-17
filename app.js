const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('one');
});

app.post('/', (req, res) => {
  return res.send('post');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
