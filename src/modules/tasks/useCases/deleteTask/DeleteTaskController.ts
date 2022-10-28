import { Request, Response } from 'express';
import { DeleteTaskUseCase } from './DeleteTaskUseCase';

class DeleteTaskController {
  constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    this.deleteTaskUseCase.execute({ id });

    return response.status(204).json({ message: 'Task deleted' });
  }
}

export { DeleteTaskController };