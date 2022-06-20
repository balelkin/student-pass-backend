import {
  IsNotEmpty,
  MinLength,
  IsString,
  IsEmail,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class UserDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @IsEmail()
  readonly email: string = '';

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  readonly picture: string = '';

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  readonly firstName: string = '';

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  readonly lastName: string = '';

  @ApiProperty({ type: String })
  readonly middleName: string = '';

  @ApiProperty({ type: String })
  readonly course: string = '';

  @ApiProperty({ type: String })
  readonly hostel: string = '';

  @ApiProperty({ type: String })
  readonly headman: string = '';

  @ApiProperty({ type: Number })
  readonly room: number = 0;

  @ApiProperty({ type: String })
  readonly phone: string = '';

  @ApiProperty({ type: String })
  readonly parents: string = '';
}
