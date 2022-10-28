import { Task } from '../model/Task';

interface ICreateTaskDTO {
  title: string
}

interface ITasksRepository {
  create({ title }: ICreateTaskDTO): Task;
}

export { ITasksRepository, ICreateTaskDTO };