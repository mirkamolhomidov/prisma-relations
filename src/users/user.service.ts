import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async register(body: any) {
    return await this.prisma.user.create({ data: body });
  }
  async login(body: any) {
    const checkUser: any = await this.prisma.user.findFirst({
      where: { username: body.username, password: body.password },
    });
    if (!checkUser) {
      throw new HttpException('Username or password invalid', 400);
    }
  }
}
