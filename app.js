// Import necessary modules
const express = require('express') // Express framework for creating a server
const app = express() // Initialize the Express app

// Start the server on port 3000
app.listen(3001, () => {
  console.log('Server running on http://localhost:3001') // Log a message to the console
})

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello World!')
})