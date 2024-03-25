import { PrismaService } from 'src/shared/module/persistence/prisma/prisma.service';
import Account from '../../core/entity/account.entity';
import Customer from '../../core/entity/customer.entity';
import { Injectable, Logger } from '@nestjs/common';
import { BaseRepository } from '../../../../shared/module/persistence/repository/base.repository';


@Injectable()
export default class AccountPrismaRepository extends BaseRepository<Account> {
  protected accountModel: PrismaService['account'];
  protected customerModel: PrismaService['customer'];
  private logger = new Logger(PrismaService.name);

  constructor(prismaService: PrismaService) {
    super();
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
        account.balance
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
