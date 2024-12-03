
import { Property } from 'src/properties/entities/property.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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

    @OneToMany( () => Property, (property) => property.userProfile)
    @JoinColumn()
    property: Property;

    @Column({ default: true })
    state: boolean
}




