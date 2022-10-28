import { Task } from '../model/Task';

interface ICreateTaskDTO {
  title: string
}

interface ITasksRepository {
  create({ title }: ICreateTaskDTO): Task;
  list(): Task[];
}

export { ITasksRepository, ICreateTaskDTO };