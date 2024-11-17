import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Task } from '../models';
import { BaseService } from './base.service';
import { DB } from 'src/constants';

@Injectable()
export class TaskModelService extends BaseService<Task> {
  constructor(@InjectModel(Task, DB.test_db_2) private taskModel: typeof Task) {
    super(taskModel);
  }

  // Test Base Service
  getAllTasks() {
    return this.getAllWhere({});
  }
}
