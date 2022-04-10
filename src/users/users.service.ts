import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private readonly userRepository: typeof User,
  ) {}

  async create(user: any): Promise<User> {
    const hash = await bcrypt.hash(user.password, 10);
    user.password=hash
    return await this.userRepository.create<User>(user);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({
      where: { id },
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }
  async findAll(): Promise<User[]> {
    return this.userRepository.findAll<User>({
      attributes: { exclude: ['password'] },
    });
  }
  async update(userid: string, data) {
    const hash = await bcrypt.hash(data.password, 10);
    data.password=hash
    return await this.userRepository.update(
      { ...data },
      { where: { userid }, returning: true },
    );
  }
  async delete(userid: string) {
    return await this.userRepository.destroy({ where: { userid } });
  }
}
