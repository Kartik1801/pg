import { Injectable } from '@nestjs/common';
import { TaskModelService } from 'src/databases/services/task.model.service';

@Injectable()
export class TaskService {
  constructor(private readonly taskModelService: TaskModelService) {}

  getAllTasks() {
    return this.taskModelService.getAllTasks();
  }

  createTask(title: string, description: string) {
    return this.taskModelService.create({
      title,
      description,
    });
  }
}
