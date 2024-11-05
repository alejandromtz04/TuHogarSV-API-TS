import { Injectable } from '@nestjs/common';
import { CreatePropertiesTypeDto } from './dto/create-properties-type.dto';
import { UpdatePropertiesTypeDto } from './dto/update-properties-type.dto';

@Injectable()
export class PropertiesTypeService {
  create(createPropertiesTypeDto: CreatePropertiesTypeDto) {
    return 'This action adds a new propertiesType';
  }

  findAll() {
    return `This action returns all propertiesType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} propertiesType`;
  }

  update(id: number, updatePropertiesTypeDto: UpdatePropertiesTypeDto) {
    return `This action updates a #${id} propertiesType`;
  }

  remove(id: number) {
    return `This action removes a #${id} propertiesType`;
  }
}
