import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PersistenceModule } from 'src/shared/module/persistence/prisma/persistence.module';
import AccountPrismaRepository from './persistence/repository/account.prisma.repository';
import WithdrawMoneyUseCase from './usecase/atm-withdraw.usecase';
import AccountBaseRepository from './persistence/repository/base/account.base.repository';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PersistenceModule,
  ],
  providers: [
    {
      provide: AccountBaseRepository,
      useClass: AccountPrismaRepository
    },
    WithdrawMoneyUseCase
  ],
  exports: [WithdrawMoneyUseCase],
})
export class WithdrawModule { }