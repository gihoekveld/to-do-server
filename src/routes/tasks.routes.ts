import { Router } from 'express';
import { createTaskController } from '../modules/tasks/useCases/createTask';

const tasksRoutes = Router();

tasksRoutes
  .get('/:id', (request, response) => {
    return response.json({ message: 'Get task' });
  })
  .get('/', (request, response) => {
    return response.json({ message: 'Get all tasks' });
  })
  .post('/', (request, response) => {
    return createTaskController.handle(request, response);
  })
  .put('/:id', (request, response) => {
    return response.json({ message: 'Update task' });
  })
  .delete('/:id', (request, response) => {
    return response.json({ message: 'Delete task' });
  });

export { tasksRoutes };