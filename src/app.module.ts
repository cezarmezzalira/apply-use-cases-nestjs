import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WithdrawModule } from './module/withdraw/withdraw.module';

@Module({
  imports: [
    WithdrawModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
