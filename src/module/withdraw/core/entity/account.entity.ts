import Customer from './customer.entity';

export default class Account {
  constructor(
    private readonly accountId: string,
    private readonly customer: Customer,
    private balance: number,
  ) {
    this.accountId = accountId;
    this.customer = customer;
    this.balance = balance;
  }

  // transforma no objeto a ser salvo no banco
  serialize(): Record<string, any> {
    throw new Error('Method not implemented.');
  }

  public getBalance(): number {
    return this.balance;
  }

  public setBalance(balance: number): void {
    this.balance = balance;
  }
}
