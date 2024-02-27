import * as winston from 'winston'
import { ConsoleLogger, Injectable } from '@nestjs/common'
import { ActionHistoryDto } from './dto/action-history.dto'
import { AppConfigService } from '../config/config.service'

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  exitOnError: false,
  transports: [
    new winston.transports.File({
      level: 'error',
      filename: './logs/error.log',
      handleExceptions: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    new winston.transports.File({
      filename: './logs/combined.log',
      handleExceptions: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
})

@Injectable()
export class LoggerService extends ConsoleLogger {
  constructor(
    private readonly config: AppConfigService
  ) {
    super()
  }
  log(message: string) {
    logger.log('info', message)
  }

  error(message: string, ...trace: any[]) {
    logger.error(message, trace)
  }

  warn(message: string) {
    logger.warn(message)
  }

  debug(message: string) {
    logger.debug(message)
  }

  verbose(message: string) {
    logger.verbose(message)
  }

  info(message: string) {
    logger.info(message)
  }

  logAction(actionHistory: ActionHistoryDto) {
    if (actionHistory.payload && (actionHistory.payload as any).password) {
      delete (actionHistory.payload as any).password
    }

    if (Array.isArray(actionHistory.actorType)) {
      actionHistory.actorType = actionHistory.actorType.map((item) => item.toUpperCase())
    }

    logger.info(`[ACTION_HISTORY] ${JSON.stringify(actionHistory)}`)
  }
  
}
