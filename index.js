const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT || 5050;
const API_KEY = process.env.ZERION_API_KEY;
const BASE_URL = process.env.ZERION_BASE_URL;

const app = express();

app.use(cors());
app.use(express.json())

app.get('/', async (req, res) => {
  res.json({ ok: true });
});

app.get('/api/v1/contacts', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}${req.url}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    res.json(response.data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
})

app.get('/api/v1/contact/*', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}${req.url}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    res.json(response.data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
})

app.post('/api/v1/contact', async (req, res) => {
  try {
    const response = await axios.post(`${BASE_URL}${req.url}`, req.body, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    res.json(response.data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
})

app.delete('/api/v1/contact/*', async (req, res) => {
  try {
    const response = await axios.delete(`${BASE_URL}${req.url}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    res.json(response.data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
})

app.put('/api/v1/contacts/*', async (req, res) => {
  try {
    const response = await axios.put(`${BASE_URL}${req.url}`, req.body, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    res.json(response.data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
})

app.listen(PORT, () => console.log(`running on ${PORT}`));
