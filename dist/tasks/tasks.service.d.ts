import { Task, TaskStatus } from "./task.model";
import { CreateTaskDto } from "./dto/createTask.dto";
import { GetTaskFilterDto } from "./dto/filterAllTask.dto";
export declare class TasksService {
    private tasks;
    getAllTasks(filterDto?: GetTaskFilterDto): Task[];
    createNewTask(createNewTaskDto: CreateTaskDto): {
        id: any;
        title: string;
        status: TaskStatus;
        description: string;
    };
    getTaskById(id: string): Task;
    deleteTaskById(id: string): void;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
