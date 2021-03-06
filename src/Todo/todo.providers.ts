import { Connection } from 'mongoose';
import { TodoSchema } from './todo.schema';

export const todosProvider = [
  {
    provide: 'TODO_MODEL',
    useFactory: (connection: Connection) => connection.model('Todo', TodoSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
