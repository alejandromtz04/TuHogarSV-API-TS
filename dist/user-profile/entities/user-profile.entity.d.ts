import { User } from 'src/user/entities/user.entity';
export declare class UserProfile {
    id: number;
    Description: string;
    profilePhoto: string;
    registrationDate: string;
    user: User;
    state: boolean;
}
