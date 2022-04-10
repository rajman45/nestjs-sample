import { IsNotEmpty, MinLength } from 'class-validator';
export class UserDto {

  readonly userid: string;
  @IsNotEmpty()
  readonly fullName: string;
  readonly address: string;
  @IsNotEmpty()
  readonly emailId: string;
  readonly phoneNumber: string;
  readonly password: string;
}
