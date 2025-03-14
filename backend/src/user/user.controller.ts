import { Controller, Get, Post, Put, Patch, Delete, Body, Param, ParseIntPipe } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UserService } from "./user.service";
import { UpdateUserDTO } from "./dto/put-user.dto";
import { UpdatePartialUserDTO } from "./dto/patch-user.dto";

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() data: CreateUserDTO){
        return this.userService.create(data);
    }

    @Get()
    async list(){
        return this.userService.list();
    }

    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number ){
        return this.userService.show(id);
    }

    @Put(':id')
    async update( @Body() data: UpdateUserDTO, @Param('id', ParseIntPipe) id: number){
        return this.userService.update(id, data)
    }

    @Patch(':id')
    async updatePartial(@Param('id', ParseIntPipe) id: number, @Body() data: UpdatePartialUserDTO){
        return this.userService.updatePartial(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return this.userService.delete(id);
    }
}