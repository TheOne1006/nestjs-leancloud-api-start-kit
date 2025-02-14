/* istanbul ignore file */
import { Module } from '@nestjs/common';

// import {
//   utilities as nestWinstonModuleUtilities,
//   WinstonModule,
// } from 'nest-winston';
import { CoreModule } from './core/core.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './projects/projects.module';

@Module({
  imports: [
    CoreModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
