const express = require('express');
const app = express();

// Logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, welcome to our server!');
});

app.listen(3000, () => console.log('Logging server running on port 3000'));
