import { TasksRepository } from "../../repositories/implementations/TasksRepository";
import { DeleteTaskController } from "./DeleteTaskController";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

const tasksRepository = TasksRepository.getInstance();

const deleteTaskUseCase = new DeleteTaskUseCase(tasksRepository);

const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);

export { deleteTaskController };
