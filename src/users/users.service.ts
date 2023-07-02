import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: "Jomer",
      password: "Cringe",
    },
    {
      userId: 2,
      username: "Joanna",
      password: "Valledor",
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
