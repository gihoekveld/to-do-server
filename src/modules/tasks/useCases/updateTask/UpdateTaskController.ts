import { UpdateTaskUseCase } from './UpdateTaskUseCase';

import { Request, Response } from "express";

class UpdateTaskController {
  constructor(private updateTaskUseCase: UpdateTaskUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const { title } = request.body;

    const task = this.updateTaskUseCase.execute({
      id,
      title
    });

    return response.json({ task });
  }
}

export { UpdateTaskController };