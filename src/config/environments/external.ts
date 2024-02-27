import { registerAs } from '@nestjs/config'

export default registerAs('external', () => ({
  notification: process.env.NOTIFICATION_SERVICE || 'https://dev-api.jambotechnology.xyz/notifications',
  loans: process.env.LOAN_SERVICE || 'https://dev-api.jambotechnology.xyz/loans',
  telegram: {
    url: process.env.TELEGRAM_URL || '',
    chatId: process.env.TELEGRAM_CHAT_ID || '',
    excludeStatusCodes: (process.env.STATUS_CODE_DISABLE_LOGS || '401,400,404' ).split(',').map(item => parseInt(item))
  },
  google: {
    oAuth2: {
      clientId: process.env.GOOGLE_OAUTH2_CLIENT_ID || '',
    },
  },
  facebook: {
    graph: {
      url: process.env.FACEBOOK_GRAPH_URL || 'https://graph.facebook.com',
      version: process.env.FACEBOOK_GRAPH_VERSION || 'v18.0',
      timeoutInSeconds: parseInt(process.env.FACEBOOK_GRAPH_CONNECTION_TIMEOUT_IN_SECONDS || '30000', 10) || 30000,
    },
    appId: process.env.FACEBOOK_JAMBO_APP_ID || '',
    appSecret: process.env.FACEBOOK_JAMBO_APP_SECRET || '',
  },
  web3Auth: {
    privateKey: (process.env.W3A_JWT_PRIVAKEY_KEY || '').replace(/"/g, ''),
    keyId: process.env.W3A_JWT_KEY_ID || '',
    expireTime: process.env.W3A_JWT_DURATION || '30 minutes',
  },
  highScore: parseInt(process.env.HIGH_SCORE || '90'),
}))
