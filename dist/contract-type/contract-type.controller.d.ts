import { ContractTypeService } from './contract-type.service';
import { CreateContractTypeDto } from './dto/create-contract-type.dto';
import { UpdateContractTypeDto } from './dto/update-contract-type.dto';
export declare class ContractTypeController {
    private readonly contractTypeService;
    constructor(contractTypeService: ContractTypeService);
    create(createContractTypeDto: CreateContractTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateContractTypeDto: UpdateContractTypeDto): string;
    remove(id: string): string;
}
