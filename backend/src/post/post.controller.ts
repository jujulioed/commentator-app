import { Body, Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { CreatePostDTO } from "./dto/create-post.dto";
import { PostService } from "./post.service";

@Controller('posts')
export class PostController {

    constructor(private readonly postService: PostService) {}

    @Post()
    async create(@Body() data: CreatePostDTO){
        return this.postService.create(data);
    }

    @Get()
    async list(){}

    @Get(':id')
    async show(){}

    @Put(':id')
    async update(){}

    @Patch(':id')
    async updatePartial(){}

    @Delete(':id')
    async delete(){}
}