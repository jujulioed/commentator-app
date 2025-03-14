import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePostDTO } from "./dto/create-post.dto";

@Injectable()
export class PostService {
    constructor(private readonly prisma: PrismaService) {}

    async create({ownerId, text, referencePost, awnserPost}: CreatePostDTO){

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

    async list(){}

    async show(){}

    async update(){}

    async updatePartial(){}

    async delete(){}
}