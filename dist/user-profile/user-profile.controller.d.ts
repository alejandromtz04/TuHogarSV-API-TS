import { UserProfileService } from './user-profile.service';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
export declare class UserProfileController {
    private readonly userProfileService;
    constructor(userProfileService: UserProfileService);
    create(createUserProfileDto: CreateUserProfileDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserProfileDto: UpdateUserProfileDto): string;
    remove(id: string): string;
}
