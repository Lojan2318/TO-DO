/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: '1234',
  port: 5432,
  host: '127.0.0.1',
  database: 'postgres',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
