import RequestUser from '@decorators/request-user.decorator';
import {
  Get, Controller, Res, Render,
} from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import UserEntity from '@v1/users/entities/user.entity';
import { Response } from 'express';
import AppService from './app.service';

@ApiTags('App')
@Controller('/')
export default class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({ description: 'Displays hello message' })
  @Get()
  root(@RequestUser() user: UserEntity, @Res() res: Response) {
    if (user) {
      console.log(user);
      res.redirect('/v1/users/profile');
    } else {
      res.render('index');
    }
  }
}
