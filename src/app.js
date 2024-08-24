const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.get('/api/fruit/all', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://www.fruityvice.com/api/fruit/all',
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
