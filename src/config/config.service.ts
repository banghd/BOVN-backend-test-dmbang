import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'

import swaggerConfig from './environments/swagger'
import systemConfig from './environments/system'
import externalConfig from './environments/external'


@Injectable()
export class AppConfigService {
  constructor(
    @Inject(systemConfig.KEY)
    private _system: ConfigType<typeof systemConfig>,
    @Inject(externalConfig.KEY)
    private _external: ConfigType<typeof externalConfig>,
  ) { }

  get system() {
    return this._system
  }
}
