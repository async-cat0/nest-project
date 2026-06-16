import { IsNotEmpty, IsString } from 'class-validator';

export class UsersCreateDto{
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  email: string
}
