import { LoggerService, Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { AppConfigModule } from "./config/config.module";
import { AppConfigService } from "./config/config.service";
import { UserModule } from "./users/user.module";

@Module({
  imports: [
    UserModule,
    MongooseModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: async (configService: AppConfigService, loggerService: LoggerService) => ({
        uri: configService.system.mongodbURi,
        maxPoolSize: 10,
        autoIndex: configService.system.env !== 'production',
        connectionFactory: (connection) => {
          connection.once('open', async () => {
            loggerService.log('Connected to MongoDB successfully')
          })
          connection.on('error', (error) => {
            loggerService.error(`Failed to connect to MongoDB at ${connection.host}:${connection.port}`, error)
          })
          return connection
        },
      }),
      inject: [AppConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
