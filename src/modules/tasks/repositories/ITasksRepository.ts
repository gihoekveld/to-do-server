import { Task } from '../model/Task';

interface ICreateTaskDTO {
  title: string
}

interface ITasksRepository {
  create({ title }: ICreateTaskDTO): Task;
  findById(id: string): Task;
  list(): Task[];
  delete({ id }: { id: string }): void;
}

export { ITasksRepository, ICreateTaskDTO };