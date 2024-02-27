import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as shortid from 'shortid'
import { MinMax } from "../../shared/validation-rules";
import mongoose from "mongoose";
import * as mongooseBcrypt from 'mongoose-bcrypt'
import { BaseModel } from "../../shared/base-model";

@Schema({
  _id: false,
  timestamps: true,
  toObject: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret._id
      delete ret.__v
      delete ret.password
    },
  },
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret._id
      delete ret.__v
      delete ret.password
    },
  },
})
export class User extends BaseModel{
  @Prop({
    type: String,
    default: shortid.generate,
  })
  _id: string
  
  @Prop({
    required: true,
    minlength: MinMax.name[0],
    maxlength: MinMax.name[1],
  })
  firstName: string
  
  @Prop({
    required: false,
    minlength: MinMax.name[0],
    maxlength: MinMax.name[1],
  })
  lastName: string
  
  @Prop({
    required: false,
    trim: true,
    minlength: MinMax.email[0],
    maxlength: MinMax.email[1],
  })
  email: string
  
  @Prop({
    required: false,
    bcrypt: true,
  })
  password: string
}

export const UserSchema = SchemaFactory.createForClass(User)

UserSchema.index({ email: 1 })

// @ts-ignore
UserSchema.plugin(mongooseBcrypt)


export type UserDocument = User & mongoose.Document & {
  verifyPassword: (password: string) => Promise<boolean>
}
