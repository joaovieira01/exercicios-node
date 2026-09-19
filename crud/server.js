import express from 'express';

const app = express();
const PORT = 3000;
app.use(express.json());

// Boas-vindas
app.get('/', (req, res) => {
    res.send('API de Tarefas rodando! Acesse /tarefas para ver a lista.');
  });

let tarefas = [
    { id: 1, titulo: 'Estudar JavaScript' },
    { id: 2, titulo: 'Fazer Exercícios de lógica' }
];

// GET - listar todos
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

// POST - cadastrar novo
app.post('/tarefas', (req, res) => {
    const novaTarefa = req.body;
    novaTarefa.id = tarefas.length + 1;
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

// PUT - atualizar existente
app.put('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tarefas.findIndex(t => t.id === id);
    if (index !== -1) {
        tarefas[index] = { id, ...req.body };
        res.json(tarefas[index]);
    } else {
        res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    }
});

// DELETE - remover
app.delete('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tarefas = tarefas.filter(t => t.id !== id);
    res.json({ mensagem: 'Tarefa removida com sucesso' });
});

// Iniciando servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});