import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodosService } from './todo.service';
import { Todo, TodoDto } from './todo.interface';

@Controller('todo')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return await this.todoService.findAll();
  }

  @Post()
  async postTodo(@Body() createTodo: TodoDto): Promise<Todo> {
    return await this.todoService.create(createTodo);
  }
}
