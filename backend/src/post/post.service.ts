import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePostDTO } from "./dto/create-post.dto";
import { PutPostDTO } from "./dto/put-post.dto";
import { PatchPostDTO } from "./dto/patch-post.dto";
import { NotFoundError } from "rxjs";

@Injectable()
export class PostService {
    constructor(private readonly prisma: PrismaService) {}

    async create({ownerId, text, referencePost, awnserPost}: CreatePostDTO){
        
        // Check if the user exist
        if(!(await this.prisma.user.findUnique({
            where: {
                id: Number(ownerId)
            }
        }))) {
            throw NotFoundError;
        }

        referencePost = referencePost ? referencePost : -1;
        awnserPost = awnserPost ? awnserPost : -1

        return await this.prisma.post.create({
            data: {
                owner_id: Number(ownerId),
                text,
                likes: 0,
                dislikes: 0,
                reference_post: referencePost,
                awnser_post: awnserPost
            }
        })
    }

    async list(){
        return await this.prisma.post.findMany();
    }

    async show(id: number){
        return await this.prisma.post.findUnique({
            where: {
                id
            }
        });
    }

    async update(id: number, data: PutPostDTO){

        // Check if the post exists
        if(!(await this.show(id))) {
            throw NotFoundError;
        }

        // Check if the user exist
        if(!(await this.prisma.user.findUnique({
            where: {
                id: Number(data.ownerId)
            }
        }))) {
            throw NotFoundError;
        }

        // TODO: Check if the reference post and awnser post are valid 

        data.ownerId = data.ownerId ? data.ownerId : -1;
        data.text = data.text ? data.text : ""
        data.likes = data.likes ? data.likes : -1
        data.dislikes = data.dislikes ? data.dislikes : -1
        data.referencePost = data.referencePost ? data.referencePost : -1
        data.awnserPost = data.awnserPost ? data.awnserPost : -1

        return await this.prisma.post.update({
            data,
            where: {
                id
            }
        })
    }

    async updatePartial(id: number, data: PatchPostDTO){
        if(!(await this.show(id))) {
            throw NotFoundError;
        }

        return await this.prisma.post.update({
            data,
            where: {
                id
            }
        })
    }

    async delete(id: number){
        if(!(await this.show(id))) {
            throw NotFoundError;
        }

        return await this.prisma.post.delete({
            where: {
                id
            }
        })
    }
}