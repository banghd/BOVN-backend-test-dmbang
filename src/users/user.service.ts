import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import mongoose, { models, } from 'mongoose'
import { MongooseModel } from "../shared/types";
import { UserDto } from "./dto/user.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly UserModel:MongooseModel<UserDocument>) {
  }
  
  async getALlUsers() {
    const users = await this.UserModel.find()
    return users.map(item => new UserDto(item))
  }
  
  async find( id: string ) {
    const user = await this.UserModel.findById(id)
    return new UserDto(user)
  }
  
  async create( dto: CreateUserDto ) {
    return this.UserModel.create(dto)
  }
  
  update( id: string, dto: UpdateUserDto ) {
    this.UserModel.findByIdAndUpdate(id, dto)
    return
  }
  
  delete( id: string ) {
    this.UserModel.findByIdAndUpdate(id, {deleted: true})
    return
  }
}
