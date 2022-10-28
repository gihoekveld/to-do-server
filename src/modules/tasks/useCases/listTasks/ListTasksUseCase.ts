import { Task } from "../../model/Task";
import { TasksRepository } from "../../repositories/implementations/TasksRepository";

class ListTasksUseCase {
  constructor(private tasksRepository: TasksRepository) {}

  execute(): Task[] {
    const tasks = this.tasksRepository.list();

    return tasks;
  }
}

export { ListTasksUseCase };