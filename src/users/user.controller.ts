import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {
  }
  @Get()
  async getAllUsers(): Promise<UserDto[]> {
    return this.userService.getALlUsers()
  }
  
  @Get('/:id')
  async find(@Param('id') id : string): Promise<UserDto> {
    return this.userService.find(id)
  }
  
  @Post('')
  async create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto)
  }
  
  @Put('')
  async update(@Param('id')id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto)
  }
  
  @Get('/:id')
  async delete(@Param('id') id : string) {
    return this.userService.delete(id)
  }
}
