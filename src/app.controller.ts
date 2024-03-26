import { Body, Controller, Post } from '@nestjs/common';
import WithdrawMoneyUseCase from './module/withdraw/usecase/atm-withdraw.usecase';

type requestBodyDto = {
  accountId: string;
  accountPassword: string;
  withdrawValue: number;
  atmId: string;
};

@Controller()
export class AppController {
  constructor(private readonly withdrawUsecase: WithdrawMoneyUseCase) { }

  @Post()
  async postWithdrawTransaction(
    @Body() requestBody: requestBodyDto,
  ): Promise<void> {
    await this.withdrawUsecase.execute(
      requestBody.accountId,
      requestBody.accountPassword,
      requestBody.withdrawValue,
      requestBody.atmId,
    );
  }
}
