import { PartialType } from '@nestjs/mapped-types';
import { CreatePropertiesTypeDto } from './create-properties-type.dto';

export class UpdatePropertiesTypeDto extends PartialType(CreatePropertiesTypeDto) {}
