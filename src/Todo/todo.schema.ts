import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  dateOf: String,
  isDone: Boolean,
  phoneNumber: String
});

