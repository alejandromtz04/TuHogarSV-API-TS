import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertiesTypeService } from './properties-type.service';
import { CreatePropertiesTypeDto } from './dto/create-properties-type.dto';
import { UpdatePropertiesTypeDto } from './dto/update-properties-type.dto';

@Controller('properties-type')
export class PropertiesTypeController {
  constructor(private readonly propertiesTypeService: PropertiesTypeService) {}

  @Post()
  create(@Body() createPropertiesTypeDto: CreatePropertiesTypeDto) {
    return this.propertiesTypeService.create(createPropertiesTypeDto);
  }

  @Get()
  findAll() {
    return this.propertiesTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertiesTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertiesTypeDto: UpdatePropertiesTypeDto) {
    return this.propertiesTypeService.update(+id, updatePropertiesTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertiesTypeService.remove(+id);
  }
}
