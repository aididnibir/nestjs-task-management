import {
  Get,
  Body,
  Post,
  Param,
  Query,
  Patch,
  Delete,
  Controller,
} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Task, TaskStatus } from "./task.model";
import { CreateTaskDto } from "./dto/createTask.dto";
import { GetTaskFilterDto } from "./dto/filterAllTask.dto";

@Controller("tasks")
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(@Query() filterDto: GetTaskFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      return this.tasksService.getAllTasks(filterDto);
    } else {
      return this.tasksService.getAllTasks();
    }
  }

  @Post()
  createNewTask(@Body() createNewTaskDto: CreateTaskDto): Task {
    return this.tasksService.createNewTask(createNewTaskDto);
  }

  @Get("/:id")
  getTaskById(@Param("id") id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Delete("/:id")
  deleteTaskById(@Param("id") id: string) {
    this.tasksService.deleteTaskById(id);
    return "Task deleted successfully";
  }

  @Patch("/:id")
  updateTaskStatus(
    @Param("id") id: string,
    @Body("status") status: TaskStatus
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
