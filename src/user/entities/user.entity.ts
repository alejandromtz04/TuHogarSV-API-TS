import { UserContact } from "src/user-contact/entities/user-contact.entity";
import { UserProfile } from "src/user-profile/entities/user-profile.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import * as bcrypt from "bcrypt";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToOne(() => UserContact, (userContact) => userContact.user)
    userContact: UserContact;

    @OneToOne(() => UserProfile, (userProfile) => userProfile.user)
    userProfile: UserProfile;

    @Column({ default : true })
    state: boolean


    //Encrypt password

    hashPassword(): void {
        const saltRounds = bcrypt.saltSync(10)
        this.password = bcrypt.hashSync(this.password, saltRounds);
    }

    checkPassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
    }
}
