

const express = require('express');
const { client, createTables, createCustomer, createRestaurant, fetchCustomers, fetchRestaurants, createReservation, destroyReservation } = require('./db');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/api/customers', async (req, res) => {
  try {
    
    const customers = await fetchCustomers();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/restaurants', async (req, res) => {
  try {
    const restaurants = await fetchRestaurants();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/reservations', async (req, res) => {
  try {
    // Code to fetch reservations goes here
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/customers/:id/reservations', async (req, res) => {
  try {
    // Code to create reservation goes here
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/customers/:customer_id/reservations/:id', async (req, res) => {
  try {
    // Code to delete reservation goes here
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const init = async () => {
  await client.connect();
  console.log('Connected to database');
  await createTables();
  console.log('Tables created');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

init();
