import { ContractType } from "src/contract-type/entities/contract-type.entity";
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

    // propertieType

    // ContactHour

    // propertieImg

    @Column({ default : true })
    state: boolean

}
