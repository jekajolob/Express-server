// Import necessary modules
const express = require('express') // Express framework for creating a server
const app = express() // Initialize the Express app
const bodyParser = require('body-parser') // Middleware to parse incoming request bodies

// Start the server on port 3001
app.listen(3001, () => {
  console.log('Server running on http://localhost:3001') // Log a message to the console
})

// Middleware to parse JSON request bodies
app.use(bodyParser.json())

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/greet', (req, res) => {
    const name = req.body.name; // Access the "name" field from the request body
    res.send(`Hello, ${name}!`); // Respond with a greeting
});