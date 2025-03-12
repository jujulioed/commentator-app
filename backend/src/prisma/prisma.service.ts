import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

    // When called, connect to DB
    async onModuleInit() {
        await this.$connect();
    }

    // When finish, close connection with DB
    async enableShutdownHook(app: INestApplication) {
        process.on('beforeExit', async () => {
            await app.close();
        })
    }
}