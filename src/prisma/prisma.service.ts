import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    // const databaseUrl = process.env.DATABASE_URL;
    const databaseUrl = 'postgresql://postgres:root@localhost:5432/myapp_db';
    console.log(databaseUrl);
    if (!databaseUrl || typeof databaseUrl !== 'string') {
      throw new Error('DATABASE_URL must be a valid string');
    }

    const pool = new Pool({
      connectionString: databaseUrl,
    });

    const adapter = new PrismaPg(pool);
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
    console.log('✅ Prisma connected to database');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('👋 Prisma disconnected');
  }
}
