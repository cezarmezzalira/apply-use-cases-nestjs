import Atm from 'src/module/withdraw/core/entity/atm.entity';
import AtmBaseRepository from '../base/atm.base.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/module/persistence/prisma/prisma.service';

@Injectable()
export default class AtmPrismaRepository implements AtmBaseRepository {
  private readonly atmModel: PrismaService['atm'];

  constructor(private readonly prismaService: PrismaService) {
    this.atmModel = prismaService.atm;
  }
  public async findById(id: string): Promise<Atm | undefined> {
    const atm = await this.atmModel.findFirst({
      where: {
        id: id,
      },
    });

    if (!atm) return;

    return new Atm(atm.id, atm.location, atm.balance);
  }
  public save(entity: Atm): void {
    throw new Error('Method not implemented.');
  }
  public update(entity: Atm): void {
    throw new Error('Method not implemented.');
  }
}
