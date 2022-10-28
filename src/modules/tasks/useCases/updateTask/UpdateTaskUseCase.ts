import { Task } from "../../model/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";

interface IRequest {
  id: string;
  title: string;
}

class UpdateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  execute({ id, title }: IRequest): Task {
    const task = this.tasksRepository.findById(id);

    if (!task) {
      throw new Error("Task not found");
    }

    task.title = title;

    return task;
  }
}

export { UpdateTaskUseCase };
