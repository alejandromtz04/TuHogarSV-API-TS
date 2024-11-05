import { CreatePropertiesTypeDto } from './dto/create-properties-type.dto';
import { UpdatePropertiesTypeDto } from './dto/update-properties-type.dto';
export declare class PropertiesTypeService {
    create(createPropertiesTypeDto: CreatePropertiesTypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePropertiesTypeDto: UpdatePropertiesTypeDto): string;
    remove(id: number): string;
}
