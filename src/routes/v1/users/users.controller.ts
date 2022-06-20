import {
  Controller,
  Get,
  NotFoundException,
  Render,
  Res,
  UseGuards, UseInterceptors,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import RequestUser from '@decorators/request-user.decorator';
import { Roles, RolesEnum } from '@decorators/roles.decorator';
import { Response } from 'express';
import IsLoggedGuard from '@guards/is-logged.guard';
import RolesGuard from '@guards/roles.guard';
import { UserDocument } from '@v1/users/schemas/users.schema';
import Serialize from '@decorators/serialization.decorator';
import WrapResponseInterceptor from '@interceptors/wrap-response.interceptor';
import AllUsersResponseEntity, { UserResponseEntity } from '@v1/users/entities/user-response.entity';
import UserEntity from './entities/user.entity';
import UsersService from './users.service';

@ApiTags('users')
@UseInterceptors(WrapResponseInterceptor)
@Controller()
export default class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({
    type: [UserEntity],
    description: 'Returns all verified users',
  })
  @ApiUnauthorizedResponse({
    description: '401. UnauthorizedError',
  })
  @Get()
  @UseGuards(RolesGuard)
  @Serialize(AllUsersResponseEntity)
  @Roles(RolesEnum.admin)
  async getAllVerified(): Promise<UserDocument[]> {
    return this.usersService.getAllVerified();
  }

  @ApiOkResponse({
    type: UserEntity,
    description: 'Returns a found user',
  })
  @ApiNotFoundResponse({ description: '404...' })
  @Get('/profile')
  @Serialize(UserResponseEntity)
  @UseGuards(IsLoggedGuard)
  // @Render('profile')
  async getById(
    @RequestUser() user: UserEntity, @Res() res: Response,
  ) {
    const foundUser = await this.usersService.getVerifiedUserById(user._id) as UserEntity;

    if (!foundUser) {
      throw new NotFoundException('The user does not exist');
    }

    res.render('profile', { foundUser });
  // return foundUser;
  }
}
