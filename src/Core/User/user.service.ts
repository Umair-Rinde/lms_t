import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findByPk(id);
  }

  async create(createUserDto:Partial <User>): Promise<User> {
    return this.userModel.create(createUserDto);
  }
  async update(id: string, updateUserDto: User): Promise<number> {
    const [affectedCount] = await this.userModel.update(updateUserDto, {
      where: { id },
    });
    return affectedCount;
  }
  

  async delete(id: string): Promise<number> {
    return this.userModel.destroy({
      where: { id },
    });
  }
}
