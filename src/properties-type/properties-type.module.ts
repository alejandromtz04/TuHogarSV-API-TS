import { Module } from '@nestjs/common';
import { PropertiesTypeService } from './properties-type.service';
import { PropertiesTypeController } from './properties-type.controller';

@Module({
  controllers: [PropertiesTypeController],
  providers: [PropertiesTypeService],
})
export class PropertiesTypeModule {}
