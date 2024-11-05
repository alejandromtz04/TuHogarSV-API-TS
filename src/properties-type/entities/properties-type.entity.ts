import { Property } from "src/properties/entities/property.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";

@Entity()
export class PropertiesType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @OneToOne(() => Property, (property) => property.propertiesType)
    properties: Property;

    @Column({ default: true })
    state: boolean;
}
