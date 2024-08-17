import { TasksService } from "./tasks.service";
import { Task, TaskStatus } from "./task.model";
import { CreateTaskDto } from "./dto/createTask.dto";
import { GetTaskFilterDto } from "./dto/filterAllTask.dto";
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(filterDto: GetTaskFilterDto): Task[];
    createNewTask(createNewTaskDto: CreateTaskDto): Task;
    getTaskById(id: string): Task;
    deleteTaskById(id: string): string;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
