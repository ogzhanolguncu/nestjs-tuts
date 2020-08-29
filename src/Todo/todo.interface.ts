import { Document } from 'mongoose';
import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export interface Todo extends Document {
  title: string;
  description: string;
  dateOf: Date;
  isDone: boolean;
  phoneNumber: string;
}

export class TodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  dateOf: string;

  @IsBoolean()
  isDone: boolean;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;
}
