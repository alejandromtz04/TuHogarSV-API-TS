import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserContactModule } from './user-contact/user-contact.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { PropertiesModule } from './properties/properties.module';
import { ContractTypeModule } from './contract-type/contract-type.module';
import { PropertiesTypeModule } from './properties-type/properties-type.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
      entities: [__dirname + "/**/*.entity{.ts,.js}"]
    }),

    UserModule,
    UserContactModule,
    UserProfileModule,
    PropertiesModule,
    ContractTypeModule,
    PropertiesTypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
