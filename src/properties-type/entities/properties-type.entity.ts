import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PropertiesType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column({ default: true })
    state: boolean;
}
