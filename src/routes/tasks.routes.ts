import { Router } from 'express';
import { createTaskController } from '../modules/tasks/useCases/createTask';
import { listTasksController } from '../modules/tasks/useCases/listTasks';
import { deleteTaskController } from '../modules/tasks/useCases/deleteTask';
import { updateTaskController } from '../modules/tasks/useCases/updateTask';
import { changeTaskStatusController } from '../modules/tasks/useCases/changeTaskStatus';

const tasksRoutes = Router();

tasksRoutes
  .get('/', (request, response) => {
    return listTasksController.handle(request, response);
  })
  .post('/', (request, response) => {
    return createTaskController.handle(request, response);
  })
  .patch('/:id/status', (request, response) => {
    return changeTaskStatusController.handle(request, response);
  })
  .put('/:id', (request, response) => {
    return updateTaskController.handle(request, response);
  })
  .delete('/:id', (request, response) => {
    return deleteTaskController.handle(request, response);
  });

export { tasksRoutes };