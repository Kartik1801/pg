import { Injectable } from '@nestjs/common';
import { UserModelService } from 'src/databases';

@Injectable()
export class UserService {
  constructor(private userModelService: UserModelService) {}

  getAllUsers() {
    return this.userModelService.getAllUsers();
  }

  createUser(name: string, email: string) {
    return this.userModelService.create({
      name,
      email,
    });
  }
}
