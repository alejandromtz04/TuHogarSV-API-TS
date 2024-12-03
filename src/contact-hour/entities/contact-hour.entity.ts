import { Property } from "src/properties/entities/property.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";

@Entity()
export class ContactHour {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    weekDay: string;

    @Column()
    startTime: Date;

    @Column()
    endTime: Date;

    @OneToOne( () => Property, (property) => property.contactHour)
    property: Property;

    @Column({ default: true })
    state: boolean
}
