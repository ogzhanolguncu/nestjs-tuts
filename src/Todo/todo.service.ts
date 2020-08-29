import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Todo, TodoDto } from './todo.interface';

@Injectable()
export class TodosService {
  constructor(
    @Inject('TODO_MODEL')
    private todoModel: Model<Todo>,
  ) {}

  async create(createTodo: TodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodo);
    return createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }
}