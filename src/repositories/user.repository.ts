import { User, UserCreate, UserRepository } from "../interfaces/user.interface";
import { prisma } from "../lib/prisma-client";

class UserRepositoryPrisma implements UserRepository {
    async create(data: UserCreate): Promise<User> {
        const result = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email
            }

        })
        return result
    }


}
export { UserRepositoryPrisma };
