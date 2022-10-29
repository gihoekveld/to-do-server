import { TStatus } from "../../model/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";

interface IRequest {
  id: string;
  status: TStatus;
}

class ChangeTaskStatusUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  async execute({ id, status }: IRequest): Promise<TStatus> {
    const task = this.tasksRepository.findById(id);

    if (!task) {
      throw new Error("Task not found");
    }

    task.status = status;

    return task.status;
  }
}

export { ChangeTaskStatusUseCase };