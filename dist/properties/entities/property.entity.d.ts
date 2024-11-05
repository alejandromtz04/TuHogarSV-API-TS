import { ContractType } from "src/contract-type/entities/contract-type.entity";
import { PropertiesType } from "src/properties-type/entities/properties-type.entity";
export declare class Property {
    id: number;
    title: string;
    propertieAddress: string;
    price: number;
    description: string;
    contractType: ContractType;
    propertiesType: PropertiesType;
    state: boolean;
}
