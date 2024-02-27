import { registerAs } from '@nestjs/config'

export default registerAs('system', () => ({
  env: process.env.NODE_ENV || 'local',
  mongodbURi: process.env.MONGODB_URI || '127.0.0.1:27017'
}))
