import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PersistenceModule } from 'src/shared/module/persistence/prisma/persistence.module';
import WithdrawMoneyUseCase from './usecase/atm-withdraw.usecase';
import AccountBaseRepository from './persistence/repository/base/account.base.repository';
import AccountPrismaRepository from './persistence/repository/prisma/account.prisma.repository';
import AtmBaseRepository from './persistence/repository/base/atm.base.repository';
import AtmPrismaRepository from './persistence/repository/prisma/atm.prisma.repository';

@Module({
  imports: [ConfigModule.forRoot(), PersistenceModule],
  providers: [
    {
      provide: AccountBaseRepository,
      useClass: AccountPrismaRepository,
    },
    {
      provide: AtmBaseRepository,
      useClass: AtmPrismaRepository,
    },
    WithdrawMoneyUseCase,
  ],
  exports: [WithdrawMoneyUseCase],
})
export class WithdrawModule { }
