import { Column, PrimaryGeneratedColumn } from "typeorm";

export class UserContact {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column({ default : true })
    state: boolean
}
