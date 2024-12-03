import { PartialType } from '@nestjs/mapped-types';
import { CreatePropertyImgDto } from './create-property-img.dto';

export class UpdatePropertyImgDto extends PartialType(CreatePropertyImgDto) {}
