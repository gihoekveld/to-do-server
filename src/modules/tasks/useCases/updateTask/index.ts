import { TasksRepository } from "../../repositories/implementations/TasksRepository";
import { UpdateTaskController } from "./UpdateTaskController";
import { UpdateTaskUseCase } from "./UpdateTaskUseCase";

const tasksRepository = TasksRepository.getInstance();

const updateTaskUseCase = new UpdateTaskUseCase(tasksRepository);

const updateTaskController = new UpdateTaskController(updateTaskUseCase);

export { updateTaskController };