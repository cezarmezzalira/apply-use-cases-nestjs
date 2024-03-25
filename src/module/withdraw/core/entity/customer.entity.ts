export default class Customer {
  constructor(
    public readonly customerId: string,
    public name: string,
    public email: string,
  ) {
    this.customerId = customerId;
    this.name = name;
    this.email = email;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setEmail(email: string): void {
    this.email = email;
  }
}
