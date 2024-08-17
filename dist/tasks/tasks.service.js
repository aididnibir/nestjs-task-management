"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const task_model_1 = require("./task.model");
const uuid_1 = require("uuid");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [
            {
                id: "1",
                title: "Task 1 one",
                status: task_model_1.TaskStatus.OPEN,
                description: "Description 1",
            },
            {
                id: "2",
                title: "Task 2",
                status: task_model_1.TaskStatus.OPEN,
                description: "Description 2",
            },
            {
                id: "3",
                title: "Task 3",
                status: task_model_1.TaskStatus.OPEN,
                description: "Description 3",
            },
            {
                id: "4",
                title: "Task 4",
                status: task_model_1.TaskStatus.OPEN,
                description: "Description 4",
            },
            {
                id: "5",
                title: "Task 5",
                status: task_model_1.TaskStatus.OPEN,
                description: "Description 5",
            },
            {
                id: "z",
                title: "Task 5",
                status: task_model_1.TaskStatus.OPEN,
                description: "Description 5",
            },
        ];
    }
    getAllTasks(filterDto) {
        const { title, status } = filterDto;
        if (title) {
            return this.tasks.filter((task) => task.title?.toLowerCase().includes(title?.toLowerCase()));
        }
        if (status) {
            return this.tasks.filter((task) => task.status?.toLowerCase().includes(status?.toLowerCase()));
        }
        else {
            return this.tasks;
        }
    }
    createNewTask(createNewTaskDto) {
        const { title, description } = createNewTaskDto;
        const newTaskPayload = {
            id: (0, uuid_1.v4)(),
            title: title,
            status: task_model_1.TaskStatus.OPEN,
            description: description,
        };
        this.tasks.push(newTaskPayload);
        return newTaskPayload;
    }
    getTaskById(id) {
        return this.tasks.find((task) => task.id === id);
    }
    deleteTaskById(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
    updateTaskStatus(id, status) {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
//# sourceMappingURL=tasks.service.js.map