import { Property } from "src/properties/entities/property.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";

@Entity()
export class ContractType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @OneToOne(() => Property, (property) => property.contractType)
    property: Property

    @Column({ default : true })
    state: boolean;
}
