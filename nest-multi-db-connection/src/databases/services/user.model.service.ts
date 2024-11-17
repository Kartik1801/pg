import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from '../models';
import { BaseService } from './base.service';
import { DB } from 'src/constants';

@Injectable()
export class UserModelService extends BaseService<User> {
  constructor(@InjectModel(User, DB.test_db_1) private userModel: typeof User) {
    super(userModel);
  }

  // Test Base Service
  getAllUsers() {
    return this.getAllWhere({});
  }
}
