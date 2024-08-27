const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/api/top', async (req, res) => {
  // Your logic to fetch top products
  res.json({ topProducts: [/* your top products data */] });
});

module.exports = app;
