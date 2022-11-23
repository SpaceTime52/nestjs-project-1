import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('abc')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user')
  getUser(): string {
    return this.appService.getUser();
  }

  @Post('user')
  postUser(): string {
    return this.appService.postUser();
  }

  @Put('user')
  putUser(): string {
    return this.appService.getUser();
  }

  @Delete('user')
  deleteUser(): string {
    return this.appService.postUser();
  }
}
