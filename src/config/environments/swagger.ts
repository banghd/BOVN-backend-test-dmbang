import { registerAs } from '@nestjs/config'

export default registerAs('swagger', () => ({
  enabled: process.env.NODE_ENV !== 'production',
  title: 'User service API document',
  description: 'API document for User service',
  version: '1.0',
  path: 'users/docs',
}))
