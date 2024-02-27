import { ApiProperty } from '@nestjs/swagger'

import {
  ACTION_TYPE,
  TARGET_TYPE,
} from '../enum'

export class ActionHistoryDto {
  /**
   * Type of actor who makes this action
   */
  @ApiProperty()
  actorType: string | string[]

  /**
   * Actor Id
   */
  actorId?: string

  /**
   * Action type
   */
  @ApiProperty({ enum: ACTION_TYPE })
  action: ACTION_TYPE

  /**
   * Target type of this action
   */
  @ApiProperty({ enum: TARGET_TYPE })
  targetType?: TARGET_TYPE

  /**
   * Target Id
   */
  @ApiProperty()
  targetId?: string

  /**
   * Extra payload of this action
   */
  payload?: unknown
}
