import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserContact } from 'src/user-contact/entities/user-contact.entity';
import { UserProfile } from 'src/user-profile/entities/user-profile.entity';
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(UserContact) private userContactRepository: Repository<UserContact>,
    @InjectRepository(UserProfile) private userProfileRepository: Repository<UserProfile>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const saltRounds: number = 10;
    const hashedPassword = bcrypt.hashSync(createUserDto.password, saltRounds);

    try {

      const findUser = await this.userRepository.findOne({ where: { email: createUserDto.email }});
      if (findUser) {
        return new HttpException(
          'User already exist',
          HttpStatus.BAD_REQUEST
        )
      }


    } catch (error) {

    }

  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {

    const findUser = await this.userRepository.findOne({ where: { state: true }});
      if (!findUser) {
        return new HttpException(
          'User not found',
          HttpStatus.BAD_REQUEST
        )
      }

      const findUserContact = await this.userContactRepository.findOne({ where: { state: true }});
      if (!findUserContact) {
        return new HttpException(
          'UserContact not found',
          HttpStatus.BAD_REQUEST
        )
      }

      const findUserProfile = await this.userProfileRepository.findOne({ where: { state : true }});
      if (!findUserProfile) {
        return new HttpException(
          'UserProfileNot not found',
          HttpStatus.BAD_REQUEST
        )
      }

  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
