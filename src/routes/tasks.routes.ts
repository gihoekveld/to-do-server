import { Router } from 'express';
import { createTaskController } from '../modules/tasks/useCases/createTask';
import { listTasksController } from '../modules/tasks/useCases/listTasks';

const tasksRoutes = Router();

tasksRoutes
  .get('/', (request, response) => {
    return listTasksController.handle(request, response);
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