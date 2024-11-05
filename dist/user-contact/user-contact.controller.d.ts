import { UserContactService } from './user-contact.service';
import { CreateUserContactDto } from './dto/create-user-contact.dto';
import { UpdateUserContactDto } from './dto/update-user-contact.dto';
export declare class UserContactController {
    private readonly userContactService;
    constructor(userContactService: UserContactService);
    create(createUserContactDto: CreateUserContactDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserContactDto: UpdateUserContactDto): string;
    remove(id: string): string;
}
