import { Body, Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('/posts')
export class PostsController {
  constructor(private service: PostsService) {}
  @Get('/:id')
  async getPosts(@Param('id') id: string) {
    return await this.service.getPosts(id);
  }
  async createPost(@Body() body: any) {
    return await this.service.createPost(body);
  }
}
