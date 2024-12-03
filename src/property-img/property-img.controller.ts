import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyImgService } from './property-img.service';
import { CreatePropertyImgDto } from './dto/create-property-img.dto';
import { UpdatePropertyImgDto } from './dto/update-property-img.dto';

@Controller('property-img')
export class PropertyImgController {
  constructor(private readonly propertyImgService: PropertyImgService) {}

  @Post()
  create(@Body() createPropertyImgDto: CreatePropertyImgDto) {
    return this.propertyImgService.create(createPropertyImgDto);
  }

  @Get()
  findAll() {
    return this.propertyImgService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyImgService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyImgDto: UpdatePropertyImgDto) {
    return this.propertyImgService.update(+id, updatePropertyImgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyImgService.remove(+id);
  }
}
