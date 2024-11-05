import { User } from "src/user/entities/user.entity";
export declare class UserContact {
    id: number;
    email: string;
    phone: string;
    address: string;
    user: User;
    state: boolean;
}
