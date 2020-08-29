import * as mongoose from 'mongoose';

const dbUrl: string = `mongodb+srv://admin:8TBaRJxEr7TniaOY@cluster0.vdpln.mongodb.net/cluster0?retryWrites=true&w=majority`;
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(dbUrl),
  },
];
