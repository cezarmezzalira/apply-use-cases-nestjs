import { PrismaService } from 'src/shared/module/persistence/prisma/prisma.service';
import { Injectable, Logger } from '@nestjs/common';
import AccountBaseRepository from '../base/account.base.repository';
import Account from 'src/module/withdraw/core/entity/account.entity';
import Customer from 'src/module/withdraw/core/entity/customer.entity';

@Injectable()
export default class AccountPrismaRepository implements AccountBaseRepository {
  private readonly accountModel: PrismaService['account'];
  private readonly customerModel: PrismaService['customer'];
  private logger = new Logger(PrismaService.name);

  constructor(prismaService: PrismaService) {
    this.accountModel = prismaService.account;
    this.customerModel = prismaService.customer;
  }

  async findById(id: string): Promise<Account | undefined> {
    try {
      const account = await this.accountModel.findFirst({
        where: {
          id: id,
        },
      });

      if (!account) return;

      const customer = await this.customerModel.findFirst({
        where: {
          id: account.customerId,
        },
      });

      if (!customer) return;

      return new Account(
        account.id,
        new Customer(customer.id, customer.name, customer.email),
        account.balance,
      );
    } catch (error) {
      this.logger.error(error);
      throw new Error('An error occurred while trying to find the account');
    }
  }

  public save(account: Account): void {
    throw new Error('Not implemented');
  }

  public update(account: Account): void {
    throw new Error('Not implemented');
  }
}
