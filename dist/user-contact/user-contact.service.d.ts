import { CreateUserContactDto } from './dto/create-user-contact.dto';
import { UpdateUserContactDto } from './dto/update-user-contact.dto';
export declare class UserContactService {
    create(createUserContactDto: CreateUserContactDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserContactDto: UpdateUserContactDto): string;
    remove(id: number): string;
}
