import { UserContact } from "src/user-contact/entities/user-contact.entity";
import { UserProfile } from "src/user-profile/entities/user-profile.entity";
export declare class User {
    id: number;
    name: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    userContact: UserContact;
    userProfile: UserProfile;
    state: boolean;
}
