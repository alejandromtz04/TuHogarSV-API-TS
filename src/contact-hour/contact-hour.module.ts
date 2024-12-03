import { Module } from '@nestjs/common';
import { ContactHourService } from './contact-hour.service';
import { ContactHourController } from './contact-hour.controller';

@Module({
  controllers: [ContactHourController],
  providers: [ContactHourService],
})
export class ContactHourModule {}
