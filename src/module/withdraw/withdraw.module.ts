import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PersistenceModule } from 'src/shared/module/persistence/prisma/persistence.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PersistenceModule
  ],
  providers: [

  ],
  exports: [],
})
export class WithdrawModule { }