import { Test, TestingModule } from '@nestjs/testing'

import { LoggerInterceptor } from './logger.interceptor'
import { LoggerService } from './logger.service'

describe('LoggerInterceptor', () => {
  let loggerInterceptor: LoggerInterceptor

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggerInterceptor, LoggerService],
    }).compile()

    loggerInterceptor = module.get<LoggerInterceptor>(LoggerInterceptor)
  })

  it('should be defined', () => {
    expect(loggerInterceptor).toBeDefined()
  })
})
