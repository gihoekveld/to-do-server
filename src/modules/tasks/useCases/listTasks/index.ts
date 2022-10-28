import { TasksRepository } from "../../repositories/implementations/TasksRepository";
import { ListTasksController } from "./ListTasksController";
import { ListTasksUseCase } from "./ListTasksUseCase";

const tasksRepository = TasksRepository.getInstance();

const listTasksUseCase = new ListTasksUseCase(tasksRepository);

const listTasksController = new ListTasksController(listTasksUseCase);

export { listTasksController };