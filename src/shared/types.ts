import mongoose, { Callback, PaginateOptions, PaginateResult, QueryWithHelpers } from "mongoose";

export interface MongooseModel<T extends mongoose.Document, QueryHelpers = {}>
  extends mongoose.Model<T, QueryHelpers> {
  paginate(
    query?: Object,
    options?: PaginateOptions,
    callback?: (err: any, result: PaginateResult<T>) => void,
  ): Promise<PaginateResult<T>>
  
  /** Find only deleted documents */
  findDeleted: typeof mongoose.Model.find
  /** Find all documents including deleted */
  findWithDeleted: typeof mongoose.Model.find
  /** Find One only deleted documents */
  findOneDeleted: typeof mongoose.Model.findOne
  /** Find One all documents including deleted */
  findOneWithDeleted: typeof mongoose.Model.findOne
  /** Find One And Update only deleted documents */
  findOneAndUpdateDeleted: typeof mongoose.Model.findOneAndUpdate
  /** Find One And Update all documents including deleted */
  findOneAndUpdateWithDeleted: typeof mongoose.Model.findOneAndUpdate
  /** Update only deleted documents */
  
  
  // @ts-ignore
  // @ts-ignore
  /**
   * Delete documents by conditions
   */
  delete(
    conditions?: any,
    deleteBy?: any,
    fn?: Callback<T, this>,
  ): QueryWithHelpers<mongodb.DeleteWriteOpResultObject['result'] & { deletedCount?: number }, T, QueryHelpers>
  
  // @ts-ignore
  /**
   * Restore documents by conditions
   */
  restore(conditions?: any, fn?: Callback<T, this>): mongoose.Query<T, T> & QueryHelpers
  
  /**
   * Delete a document by ID
   */
  deleteById(
    id?: string | mongoose.Types.ObjectId | Callback<T, this>,
    deleteBy?: string | mongoose.Types.ObjectId | mongoose.Document | Callback<T, this>,
    fn?: Callback<T, this>,
  ): QueryWithHelpers<mongodb.DeleteWriteOpResultObject['result'] & { deletedCount?: number }, T, QueryHelpers>
}
}
