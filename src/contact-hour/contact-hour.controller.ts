import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactHourService } from './contact-hour.service';
import { CreateContactHourDto } from './dto/create-contact-hour.dto';
import { UpdateContactHourDto } from './dto/update-contact-hour.dto';

@Controller('contact-hour')
export class ContactHourController {
  constructor(private readonly contactHourService: ContactHourService) {}

  @Post()
  create(@Body() createContactHourDto: CreateContactHourDto) {
    return this.contactHourService.create(createContactHourDto);
  }

  @Get()
  findAll() {
    return this.contactHourService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactHourService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactHourDto: UpdateContactHourDto) {
    return this.contactHourService.update(+id, updateContactHourDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactHourService.remove(+id);
  }
}
