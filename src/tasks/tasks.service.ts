import { Injectable } from "@nestjs/common";
import { Task, TaskStatus } from "./task.model";
import { v4 as generateTaskUniqueId } from "uuid";
import { CreateTaskDto } from "./dto/createTask.dto";
import { GetTaskFilterDto } from "./dto/filterAllTask.dto";

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: "1",
      title: "Task 1 one",
      status: TaskStatus.OPEN,
      description: "Description 1",
    },
    {
      id: "2",
      title: "Task 2",
      status: TaskStatus.OPEN,
      description: "Description 2",
    },
    {
      id: "3",
      title: "Task 3",
      status: TaskStatus.OPEN,
      description: "Description 3",
    },
    {
      id: "4",
      title: "Task 4",
      status: TaskStatus.OPEN,
      description: "Description 4",
    },
    {
      id: "5",
      title: "Task 5",
      status: TaskStatus.OPEN,
      description: "Description 5",
    },
    {
      id: "z",
      title: "Task 5",
      status: TaskStatus.OPEN,
      description: "Description 5",
    },
  ];

  getAllTasks(filterDto?: GetTaskFilterDto): Task[] {
    const { title, status } = filterDto;
    if (title) {
      return this.tasks.filter((task) =>
        task.title?.toLowerCase().includes(title?.toLowerCase())
      );
    }
    if (status) {
      return this.tasks.filter((task) =>
        task.status?.toLowerCase().includes(status?.toLowerCase())
      );
    } else {
      return this.tasks;
    }
  }

  createNewTask(createNewTaskDto: CreateTaskDto) {
    const { title, description } = createNewTaskDto;

    const newTaskPayload = {
      id: generateTaskUniqueId(),
      title: title,
      status: TaskStatus.OPEN,
      description: description,
    };
    this.tasks.push(newTaskPayload);

    return newTaskPayload;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  deleteTaskById(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTaskStatus(id: string, status: TaskStatus) {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
