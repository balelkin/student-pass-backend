import {
  Controller,
  HttpCode,
  Delete,
  UseGuards,
  Req,
  Get,
  ForbiddenException,
  Res,
} from '@nestjs/common';
import {
  ApiMovedPermanentlyResponse,
  ApiOkResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
  ApiNoContentResponse,
} from '@nestjs/swagger';
import { Response, Request as ExpressRequest } from 'express';

import UsersService from '@v1/users/users.service';
import IsLoggedGuard from '@guards/is-logged.guard';
import UserDto from '@v1/users/dto/user.dto';
import { UserGooglePayload } from './interfaces/user-google-payload.interface';
import GoogleAuthGuard from './guards/google-auth.guard';
import AuthService from './auth.service';

@ApiTags('Auth')
@Controller('google')

export default class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @ApiMovedPermanentlyResponse({ description: 'Does redirect to route' })
  @Get()
  @UseGuards(GoogleAuthGuard)
  async googleAuth() {}

  @ApiOkResponse({
    description: 'User registered/authorized successfully',
  })
  @ApiInternalServerErrorResponse({
    schema: {
      type: 'object',
      example: {
        message: 'string',
        details: {},
      },
    },
    description: 'InternalServerError. User was not authorized/registered',
  })
  @UseGuards(GoogleAuthGuard)
  @Get('redirect')
  async googleAuthRedirect(@Req() req: ExpressRequest, @Res() res: Response): Promise<any> {
    if (!req.user) {
      throw new ForbiddenException('No user from google');
    }

    const {
      accessToken,
      refreshToken,
      ...user
    } = req.user as UserGooglePayload;

    const foundUser = await this.usersService.getVerifiedUserByEmail(user.email as string);

    if (!foundUser) {
      const saveUser = await this.usersService.createIfDoesNotExist(user as UserDto);
      return saveUser;
    }

    res.render('profile', { foundUser });

    return user;
  }

  @ApiNoContentResponse({ description: 'No content. 204' })
  @UseGuards(IsLoggedGuard)
  @Delete('logout')
  @HttpCode(204)
  async logout(@Req() req: ExpressRequest): Promise<{}> {
    console.log('logout');
    await req.logout();

    return {};
  }
}
