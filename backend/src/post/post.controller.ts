import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreatePostDTO } from "./dto/create-post.dto";
import { PostService } from "./post.service";
import { PutPostDTO } from "./dto/put-post.dto";
import { PatchPostDTO } from "./dto/patch-post.dto";

@Controller('posts')
export class PostController {

    constructor(private readonly postService: PostService) {}

    @Post()
    async create(@Body() data: CreatePostDTO){
        return this.postService.create(data);
    }

    @Get()
    async list(){
        return this.postService.list();
    }

    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number){
        return this.postService.show(id);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, data: PutPostDTO){
        return this.postService.update(id, data);
    }

    @Patch(':id')
    async updatePartial(@Param('id', ParseIntPipe) id: number, data: PatchPostDTO){
        return this.postService.updatePartial(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return this.postService.delete(id);
    }
}