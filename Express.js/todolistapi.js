const express = require('express');
const app = express();
app.use(express.json());

let todos = [];
app.post('/todos', (req, res) => {
  const { task } = req.body;
  todos.push({ id: todos.length + 1, task });
  res.send('Task added');
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const todo = todos.find(t => t.id === parseInt(id));
  if (todo) {
    todo.task = task;
    res.send('Task updated');
  } else {
    res.status(404).send('Task not found');
  }
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(t => t.id !== parseInt(id));
  res.send('Task deleted');
});

app.listen(3000, () => console.log('To-Do API server running on port 3000'));
