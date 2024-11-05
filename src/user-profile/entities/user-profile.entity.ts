
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class UserProfile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Description: string;

    @Column()
    profilePhoto: string;
    
    @Column()
    registrationDate: string;

    @OneToOne( () => User, (user) => user.userProfile)
    @JoinColumn()
    user: User;
    // properties relation

    @Column({ default: true })
    state: boolean
}
