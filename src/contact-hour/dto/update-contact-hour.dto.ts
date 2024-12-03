import { PartialType } from '@nestjs/mapped-types';
import { CreateContactHourDto } from './create-contact-hour.dto';

export class UpdateContactHourDto extends PartialType(CreateContactHourDto) {}
