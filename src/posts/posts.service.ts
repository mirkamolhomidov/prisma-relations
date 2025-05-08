import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}
  async getPosts(id: string) {
    return await this.prisma.post.findFirst({
      where: { id: +id },
    });
  }
  async createPost(body: any) {
    return await this.prisma.post.create({ data: body });
  }
}
