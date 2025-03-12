import { IsAscii, IsBoolean, IsDateString, IsEmail, IsString, IsStrongPassword } from "class-validator";


export class CreateUserDTO {
    @IsString()
    name: string;

    @IsString()
    nickname: string;

    @IsDateString()
    birthday: Date;

    @IsEmail()
    email: string;

    @IsStrongPassword({
        minLength: 6,
        minLowercase: 0,
        minNumbers: 0,
        minSymbols: 0,
        minUppercase: 0
    })
    password: string;

    @IsAscii()
    gender: string;
}