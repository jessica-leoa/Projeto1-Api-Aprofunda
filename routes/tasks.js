const express = require('express');
const router = express.Router();

// Array em memória para armazenar tarefas
let tasks = [
  { id: 1, title: 'fazer projeto PretaLab', description: 'Criar um programa de task', completed: false },
  { id: 2, title: 'Entregar TCC', description: 'finalizar correções', completed: true },
  { id: 3, title: 'Praticar exercícios', description: '30 minutos de rolê de bike', completed: false }
];

// GET /tasks - Listar todas as tarefas
router.get('/', (req, res) => {
  res.json(tasks);
});

// GET /tasks/:id - Detalhar uma tarefa por id
router.get('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  
  if (!task) {
    return res.status(404).json({ message: 'Tarefa não encontrada' });
  }
  
  res.json(task);
});

// POST /tasks - Criar tarefa
router.post('/', (req, res) => {
  const { title, description, completed = false } = req.body;
  
  if (!title || !description) {
    return res.status(400).json({ message: 'Crie uma tarefa' });
  }
  
  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title,
    description,
    completed
  };
  
  tasks.push(newTask);
  res.status(201).json({ message: 'Tarefa criada com sucesso'});
});

// PUT /tasks/:id - Atualizar uma tarefa
router.put('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, description, completed } = req.body;
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  
  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Tarefa não encontrada' });
  }
  
  const updatedTask = {
    id: taskId,
    title: title || tasks[taskIndex].title,
    description: description || tasks[taskIndex].description,
    completed: completed !== undefined ? completed : tasks[taskIndex].completed
  };
  
  tasks[taskIndex] = updatedTask;
  res.json(updatedTask);
});

// DELETE /tasks/:id - Deletar uma tarefa específica
router.delete('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  
  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Tarefa não encontrada' });
  }
  
  tasks = tasks.filter(t => t.id !== taskId);
  res.status(204).end();                   
});

module.exports = router;
