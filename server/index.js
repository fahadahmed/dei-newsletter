const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use(express.static('client'));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});