import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserContactModule } from './user-contact/user-contact.module';
import { UserProfileModule } from './user-profile/user-profile.module';

@Module({
  imports: [UserModule, UserContactModule, UserProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
