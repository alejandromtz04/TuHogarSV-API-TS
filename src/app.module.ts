import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserContactModule } from './user-contact/user-contact.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { PropertiesModule } from './properties/properties.module';
import { ContractTypeModule } from './contract-type/contract-type.module';
import { PropertiesTypeModule } from './properties-type/properties-type.module';

@Module({
  imports: [UserModule, UserContactModule, UserProfileModule, PropertiesModule, ContractTypeModule, PropertiesTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
