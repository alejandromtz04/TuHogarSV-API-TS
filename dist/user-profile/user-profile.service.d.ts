import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
export declare class UserProfileService {
    create(createUserProfileDto: CreateUserProfileDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserProfileDto: UpdateUserProfileDto): string;
    remove(id: number): string;
}
