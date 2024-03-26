import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import WithdrawMoneyUseCase from './module/withdraw/usecase/atm-withdraw.usecase';

@Controller()
export class AppController {
  constructor(private readonly withdrawUsecase: WithdrawMoneyUseCase) { }

  @Post()
  async postWithdrawTransaction(): Promise<void> {
    await this.withdrawUsecase.execute("1", "1234", 500.00, "abc-1234");
  }
}
