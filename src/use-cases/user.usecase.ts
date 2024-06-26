import { User, UserCreate, UserRepository } from "../interfaces/user.interface";
import { UserRepositoryPrisma } from "../repositories/user.repository";

export class UserUseCase {
    private userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepositoryPrisma()
    }
    async create({ name, email }: UserCreate): Promise<User> {
        const existUser = await this.userRepository.findByEmail(email)
        if (existUser) {
            throw new Error("User already exists1")
        }
        const result = await this.userRepository.create({ name, email })

        return result
    }


}