
import { Module } from '@nestjs/common';
import { TodosController } from './todo.controller';
import { TodosService } from './todo.service';
import { todosProvider } from './todo.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TodosController],
  providers: [
    TodosService,
    ...todosProvider,
  ],
})
export class TodoModule {}