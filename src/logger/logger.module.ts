import { Global, Module } from '@nestjs/common'

import { LoggerInterceptor } from './logger.interceptor'
import { LoggerService } from './logger.service'

@Global()
@Module({
  providers: [LoggerInterceptor, LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {}
