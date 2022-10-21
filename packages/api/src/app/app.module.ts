import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { validate } from '../environments/env.validation';
import environment from '../environments/environment';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [environment],
      validate,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
