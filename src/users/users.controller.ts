import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getList(): any {
    return this.userService.findAll();
  }
  @Post()
  async create(@Body() post: UserDto, @Request() req): Promise<User> {
    return await this.userService.create(post);
  }
  @Put(':id')
  async update(
    @Param('id') userid: string,
    @Body() post: UserDto,
    @Request() req,
  ): Promise<any> {
    return await this.userService.update(userid, post);
  }
  @Delete(':id')
  async delete(@Param('id') userid: string, @Request() req): Promise<any> {
    return await this.userService.delete(userid);
  }
}
