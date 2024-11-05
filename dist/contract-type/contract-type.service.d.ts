import { CreateContractTypeDto } from './dto/create-contract-type.dto';
import { UpdateContractTypeDto } from './dto/update-contract-type.dto';
export declare class ContractTypeService {
    create(createContractTypeDto: CreateContractTypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateContractTypeDto: UpdateContractTypeDto): string;
    remove(id: number): string;
}
