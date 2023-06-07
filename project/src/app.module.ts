import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { config } from './orm.config';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), TodosModule],
})
export class AppModule {}
