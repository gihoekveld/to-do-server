import { ITasksRepository } from "../../repositories/ITasksRepository";

class DeleteTaskUseCase {
  constructor(private tasksRepository: ITasksRepository) {}

  execute({ id }: { id: string }): void {
    this.tasksRepository.delete({ id });
  }
}

export { DeleteTaskUseCase };
