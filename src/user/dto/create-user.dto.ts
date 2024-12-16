import { IsEmail, IsNumber, IsString, IsBoolean, MinLength, IsNotEmpty, IsOptional, IsInt } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsNumber()
    @IsNotEmpty()
    age: number;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    password: string;
    
    @IsInt()
    @IsNotEmpty()
    userContact: number;

    @IsInt()
    @IsNotEmpty()
    userProfile: number;

    @IsBoolean()
    @IsOptional()
    state: boolean;
}
