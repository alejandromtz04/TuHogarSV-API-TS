import { ContractType } from "src/contract-type/entities/contract-type.entity";
import { PropertiesType } from "src/properties-type/entities/properties-type.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    propertieAddress: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @OneToOne(() => ContractType, (contractType) => contractType.property)
    contractType: ContractType;

    @OneToOne(() => PropertiesType, (propertiesType) => propertiesType.properties)
    propertiesType: PropertiesType

    // ContactHour

    // propertieImg

    @Column({ default : true })
    state: boolean

}
