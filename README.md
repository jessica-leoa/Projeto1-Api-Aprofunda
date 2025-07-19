# API de Gerenciamento de Tarefas

Esta é uma API simples para gerenciamento de tarefas, desenvolvida como parte do Projeto1-Api-Aprofunda.

## Funcionalidades

- Listar todas as tarefas (GET /tasks)
- Detalhar uma tarefa específica (GET /tasks/:id)
- Criar uma nova tarefa (POST /tasks)
- Atualizar uma tarefa existente (PUT /tasks/:id)
- Remover uma tarefa (DELETE /tasks/:id)

## Como executar

1. Clone este repositório
2. Navegue até a pasta `API`
3. Execute `npm install` para instalar as dependências
4. Execute `npm start` para iniciar o servidor
5. A API estará disponível em `http://localhost:3000/tasks`

## Testes realizados

### Listar tarefas (GET /tasks)
![GET /tasks](screenshots/get_tasks.png)

### Detalhar tarefa (GET /tasks/1)
![GET /tasks/1](screenshots/get_task_by_id.png)

### Criar tarefa (POST /tasks)
![POST /tasks](screenshots/post_task.png)

### Atualizar tarefa (PUT /tasks/1)
![PUT /tasks/1](screenshots/put_task.png)

### Deletar tarefa (DELETE /tasks/1)
![DELETE /tasks/1](screenshots/delete_task.png)