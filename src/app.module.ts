import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WithdrawModule } from './module/withdraw/withdraw.module';
import WithdrawMoneyUseCase from './module/withdraw/usecase/atm-withdraw.usecase';
import AccountPrismaRepository from './module/withdraw/persistence/repository/account.prisma.repository';
import { PrismaService } from './shared/module/persistence/prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { PersistenceModule } from './shared/module/persistence/prisma/persistence.module';
import AccountBaseRepository from './module/withdraw/persistence/repository/base/account.base.repository';

@Module({
  imports: [WithdrawModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
