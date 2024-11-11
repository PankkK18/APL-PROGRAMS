const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: true
}));

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'user' && password === 'password') {
    req.session.user = username;
    res.send('Login successful!');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome to the dashboard, ${req.session.user}!`);
  } else {
    res.status(401).send('Please log in to access the dashboard.');
  }
});

app.listen(3000, () => console.log('Authentication server running on port 3000'));
