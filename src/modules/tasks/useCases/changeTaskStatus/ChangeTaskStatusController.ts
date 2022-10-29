import { Request, Response } from "express";

import { ChangeTaskStatusUseCase } from "./ChangeTaskStatusUseCase";

class ChangeTaskStatusController {
  constructor(private changeTaskStatusUseCase: ChangeTaskStatusUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { status } = request.body;

    const newStatus = await this.changeTaskStatusUseCase.execute({ id, status });

    return response.status(200).json({status: newStatus});
  }
}

export { ChangeTaskStatusController };
