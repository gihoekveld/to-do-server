import { Task } from "../../model/Task";
import { ICreateTaskDTO, ITasksRepository } from "../ITasksRepository";

class TasksRepository implements ITasksRepository {
  private tasks: Task[];

  private static INSTANCE: TasksRepository;

  private constructor() {
    this.tasks = [];
  }

  public static getInstance(): TasksRepository {
    if (!TasksRepository.INSTANCE) {
      TasksRepository.INSTANCE = new TasksRepository();
    }
    return TasksRepository.INSTANCE;
  }

  create({ title }: ICreateTaskDTO): Task {
    const task = new Task();

    Object.assign(task, {
      created_at: new Date(),
      title,
      status: 'to-do',
    })

    this.tasks.push(task);

    return task;
  }
}

export { TasksRepository };