import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/put-user.dto";
import { UpdatePartialUserDTO } from "./dto/patch-user.dto";
import { NotFoundError } from "rxjs";

@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaService) {}

    async create({name, nickname, birthday, email, password, gender}: CreateUserDTO) {
        
        birthday = new Date(birthday);

        return await this.prisma.user.create({
            data: {
                name,
                nickname,
                birthday,
                email,
                password,
                gender,
                activated: true
            }
        })
    }

    async list(){
        return this.prisma.user.findMany();
    }

    async show(id: number) {
        return this.prisma.user.findUnique({
            where: {
                id
            }
        });
    }

    async update(id: number, data: UpdateUserDTO)  {

        if(data.birthday) {
            data.birthday = new Date(data.birthday);
        }

        return await this.prisma.user.update({
            data,
            where: {
                id
            }
        })
    }

    async updatePartial(id: number, data: UpdatePartialUserDTO) {
        if(data.birthday) {
            data.birthday = new Date(data.birthday);
        }

        return await this.prisma.user.update({
            data,
            where: {
                id
            }
        })
    }

    async delete(id: number) {
        if(!(await this.show(id))) {
            throw NotFoundError;
        }

        return await this.prisma.user.delete({
            where: {
                id
            }
        })
    }

}