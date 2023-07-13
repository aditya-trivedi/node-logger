const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// API endpoint to accept any data
app.post('/print-data', (req, res) => {
  const data = req.body;
  console.log(data);
  res.send('Data received and printed successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
