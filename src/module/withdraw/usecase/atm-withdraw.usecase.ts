import { Injectable } from '@nestjs/common';
import AccountBaseRepository from '../persistence/repository/base/account.base.repository';
import AtmBaseRepository from '../persistence/repository/base/atm.base.repository';

@Injectable()
export default class WithdrawMoneyUseCase {
  constructor(
    private readonly accountRepository: AccountBaseRepository,
    private readonly atmRepository: AtmBaseRepository,
    // private readonly transactionRepository: TransactionRepository,
  ) { }

  public async execute(
    accountId: string,
    accountPassword: string,
    withdrawValue: number,
    atmId: string,
  ): Promise<void> {
    // Get account by accountId
    const account = await this.accountRepository.findById(accountId);

    if (!account) {
      throw new Error('Account not found');
    }
    // Get ATM by atmId
    const atm = await this.atmRepository.findById(atmId);

    if (!atm) {
      throw new Error('ATM not found');
    }
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
