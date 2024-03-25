import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import { buildConfig } from '../../config/config.factory';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [buildConfig],
  }),],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PersistenceModule { }