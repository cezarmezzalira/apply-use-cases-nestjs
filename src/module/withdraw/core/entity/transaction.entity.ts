import Account from './account.entity';
import Atm from './atm.entity';

export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
  TRANSFER = 'TRANSFER',
}

export default class Transaction {
  constructor(
    private readonly transactionId: string,
    private readonly account: Account,
    private readonly atm: Atm,
    private readonly amount: number,
    private readonly transactionType: TransactionType,
  ) {
    this.transactionId = transactionId;
    this.account = account;
    this.atm = atm;
    this.amount = amount;
    this.transactionType = transactionType;
  }
}
