import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getUser(): string {
    return this.configService.get('PORT');
  }

  postUser(): string {
    return 'Hello!';
  }
}
