import { Injectable } from '@nestjs/common';
import { CreateContactHourDto } from './dto/create-contact-hour.dto';
import { UpdateContactHourDto } from './dto/update-contact-hour.dto';

@Injectable()
export class ContactHourService {
  create(createContactHourDto: CreateContactHourDto) {
    return 'This action adds a new contactHour';
  }

  findAll() {
    return `This action returns all contactHour`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactHour`;
  }

  update(id: number, updateContactHourDto: UpdateContactHourDto) {
    return `This action updates a #${id} contactHour`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactHour`;
  }
}
