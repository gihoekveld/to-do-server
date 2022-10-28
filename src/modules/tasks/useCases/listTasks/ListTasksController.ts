import { Request, Response } from 'express';
import { ListTasksUseCase } from './ListTasksUseCase'

class ListTasksController {
  constructor(private listTasksUseCase: ListTasksUseCase) {}

  handle(request: Request, response: Response): Response {
    const tasks = this.listTasksUseCase.execute();

    return response.json(tasks);
  }
}

export { ListTasksController };