import { Prop } from "@nestjs/mongoose";
import { MinMax } from "../../shared/validation-rules";
import { User } from "../schemas/user.schema";

export class UserDto {

  id: string
  
  firstName: string
  
  lastName: string
 
  email: string
  
  
  constructor(user: User) {
    this.id = user._id
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.email = user.email
  }
}
