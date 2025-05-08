import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [UserModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
