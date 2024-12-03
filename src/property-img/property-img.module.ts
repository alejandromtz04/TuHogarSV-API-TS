import { Module } from '@nestjs/common';
import { PropertyImgService } from './property-img.service';
import { PropertyImgController } from './property-img.controller';

@Module({
  controllers: [PropertyImgController],
  providers: [PropertyImgService],
})
export class PropertyImgModule {}
