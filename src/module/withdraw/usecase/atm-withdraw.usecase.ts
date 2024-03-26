import { Inject, Injectable } from '@nestjs/common';
import { Account } from '@prisma/client';
import { BaseRepository } from 'src/shared/module/persistence/repository/base.repository';
import AccountBaseRepository from '../persistence/repository/base/account.base.repository';

@Injectable()
export default class WithdrawMoneyUseCase {
  constructor(
    private readonly accountRepository: AccountBaseRepository
    // private readonly atmRepository: AtmRepository,
    // private readonly transactionRepository: TransactionRepository,
  ) { }

  public async execute(
    accountId: string,
    accountPassword: string,
    withdrawValue: number,
    atmId: string,
  ): Promise<void> {
    const account = await this.accountRepository.findById(accountId);

    console.log(account);
    // Get account by accountId
    // Get ATM by atmId
    // Check if ATM has enough balance
    // Check if accountPassword is correct
    // Check if account has enough balance
    // Update balance in account
    // Update balance in ATM
    // Create transaction
    // Persist transaction
    // Return transaction
  }
}
