import { TasksRepository } from "../../repositories/implementations/TasksRepository";
import { ChangeTaskStatusController } from "./ChangeTaskStatusController";
import { ChangeTaskStatusUseCase } from "./ChangeTaskStatusUseCase";

const tasksRepository = TasksRepository.getInstance();

const changeTaskStatusUseCase = new ChangeTaskStatusUseCase(tasksRepository);

const changeTaskStatusController = new ChangeTaskStatusController(changeTaskStatusUseCase);

export { changeTaskStatusController };