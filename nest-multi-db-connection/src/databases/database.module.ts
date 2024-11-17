import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DB } from 'src/constants';
import { Task, User } from './models';
import { UserModelService } from './services';
import { TaskModelService } from './services/task.model.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      name: DB.test_db_1,
      dialect: 'postgres',
      host: 'localhost',
      port: 5431,
      username: 'postgres',
      password: 'postgres',
      database: 'test-db-1',
      models: [User],
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forRoot({
      name: DB.test_db_2,
      dialect: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'postgres',
      password: 'postgres',
      database: 'test-db-2',
      models: [Task],
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([User], DB.test_db_1),
    SequelizeModule.forFeature([Task], DB.test_db_2),
  ],
  providers: [TaskModelService, UserModelService],
  exports: [TaskModelService, UserModelService],
})
export class DatabaseModule {}
