import { Task } from "../../model/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";

interface IRequest {
  title: string
}

class CreateTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  execute({ title }: IRequest): Task {
    const task = this.tasksRepository.create({ title });

    return task;
  }
}

export { CreateTaskUseCase };