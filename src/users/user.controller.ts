import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private service: UserService) {}
  @Post('/register')
  async registerController(@Body() body: any) {
    try {
      return await this.service.register(body);
    } catch (error) {
      throw new Error(error);
    }
  }
  @Post('/login')
  async loginController(@Body() body: any) {
    return await this.service.login(body);
  }
}
