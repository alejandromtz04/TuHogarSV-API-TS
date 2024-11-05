import { PropertiesTypeService } from './properties-type.service';
import { CreatePropertiesTypeDto } from './dto/create-properties-type.dto';
import { UpdatePropertiesTypeDto } from './dto/update-properties-type.dto';
export declare class PropertiesTypeController {
    private readonly propertiesTypeService;
    constructor(propertiesTypeService: PropertiesTypeService);
    create(createPropertiesTypeDto: CreatePropertiesTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePropertiesTypeDto: UpdatePropertiesTypeDto): string;
    remove(id: string): string;
}
