import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePostDTO{
    @IsNumber()
    ownerId: number;

    @IsString()
    text: string;

    @IsNumber()
    @IsOptional()
    likes: number;

    @IsNumber()
    @IsOptional()
    dislikes: number;

    @IsNumber()
    @IsOptional()
    referencePost: number;

    @IsNumber()
    @IsOptional()
    awnserPost: number;

}