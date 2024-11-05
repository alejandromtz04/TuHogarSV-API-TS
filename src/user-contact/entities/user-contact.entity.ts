import { User } from "src/user/entities/user.entity";
import { Column, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export class UserContact {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @OneToOne(() => User, (user) => user.userContact)
    user: User;

    @Column({ default : true })
    state: boolean
}
