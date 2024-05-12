const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;
const API_URL = 'https://newsapi.org/v2/top-headlines/sources?apiKey=bf36a75abb0d4e639e920c2b3178403e'; // API anahtarınızı buraya ekleyin

// CORS hatasını önlemek için gerekli başlıkları ayarlayın
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// /api endpoint'ine gelen istekleri API'ye yönlendirin
app.get('/api', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Sunucuyu belirtilen portta başlatın
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});