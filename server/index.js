const express = require('express');
const cors = require('cors');
const axios = require('axios');

const ACCESS_TOKEN = '10231090879512457';
const API_URL = 'https://superheroapi.com/api/';

const app = express();
app.use(cors());

app.get('/hero/name', async (req, res, next) => {
  try {
      const { heroName } = req.query;
      const response = await axios.get(`${API_URL}${ACCESS_TOKEN}/search/${heroName}`);
      console.log(response.data.results);
      res.json(response.data.results);
  } catch (error) {
      next(error);
  }
})


app.listen(4000);