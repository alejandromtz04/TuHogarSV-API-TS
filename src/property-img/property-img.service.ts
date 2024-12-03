import { Injectable } from '@nestjs/common';
import { CreatePropertyImgDto } from './dto/create-property-img.dto';
import { UpdatePropertyImgDto } from './dto/update-property-img.dto';

@Injectable()
export class PropertyImgService {
  create(createPropertyImgDto: CreatePropertyImgDto) {
    return 'This action adds a new propertyImg';
  }

  findAll() {
    return `This action returns all propertyImg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} propertyImg`;
  }

  update(id: number, updatePropertyImgDto: UpdatePropertyImgDto) {
    return `This action updates a #${id} propertyImg`;
  }

  remove(id: number) {
    return `This action removes a #${id} propertyImg`;
  }
}
