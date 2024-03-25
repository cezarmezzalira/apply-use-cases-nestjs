import { Injectable } from '@nestjs/common';
import { Account } from '@prisma/client';
import { BaseRepository } from 'src/shared/module/persistence/repository/base.repository';

@Injectable()
export default class WithdrawMoneyUseCase {
  constructor(
    private readonly accountRepository: BaseRepository<Account>,
    // private readonly atmRepository: AtmRepository,
    // private readonly transactionRepository: TransactionRepository,
  ) { }

  public execute(
    accountId: string,
    accountPassword: string,
    withdrawValue: number,
    atmId: string,
  ): void {
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
