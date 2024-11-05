import { ContractType } from "src/contract-type/entities/contract-type.entity";
export declare class Property {
    id: number;
    title: string;
    propertieAddress: string;
    price: number;
    description: string;
    contractType: ContractType;
    state: boolean;
}
