import { Request, Response } from "express";

import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  handle(request: Request, response: Response): Response {
    const { title } = request.body;

    const task = this.createTaskUseCase.execute({ title });

    return response.status(201).json(task);
  }
}

export { CreateTaskController };
