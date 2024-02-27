import { Prop } from "@nestjs/mongoose";

export type ClassType<T = any> = new (...args: any[]) => T

export class BaseModel {
  @Prop()
  createdAt?: Date
  
  @Prop()
  updatedAt?: Date
  
  @Prop()
  deletedAt?: Date
  
  @Prop()
  deleted?: boolean
}
