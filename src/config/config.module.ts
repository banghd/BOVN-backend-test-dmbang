import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppConfigService } from './config.service'
import swaggerConfig from './environments/swagger'
import systemConfig from './environments/system'
import externalConfig from './environments/external'
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: [
        systemConfig,
        swaggerConfig,
        externalConfig,
      ],
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
