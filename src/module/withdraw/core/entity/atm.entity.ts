export default class Atm {
  constructor(
    private readonly atmId: string,
    private readonly location: string,
    private balance: number,
  ) {
    this.atmId = atmId;
    this.location = location;
    this.balance = balance;
  }

  public getBalance(): number {
    return this.balance;
  }

  public setBalance(balance: number): void {
    this.balance = balance;
  }
}
