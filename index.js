const express = require('express');
const dotenv = require('dotenv');

// Configuration .env file
dotenv.config()

// Create express APP
const app = express()
const port = process.env.PORT || 8000

// Define the first Route of the APP
app.get('/', (req, res) => {
  res.send('Hello World! :)')
})

// Define the other Routes of the APP
app.get('/hello', (req, res) => {
  res.send('Welcome to this route')
})

// Execute APP and listen requests
app.listen(port, () => {
  console.log(`SERVER RUNNING at http://localhost:${port}`)
}) 