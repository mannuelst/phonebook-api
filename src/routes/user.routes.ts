import { FastifyInstance } from 'fastify';
import { UserCreate } from '../interfaces/user.interface';
import { UserUseCase } from '../usecases/user.usecse';
export function userRoutes(fastify: FastifyInstance) {
    const userUseCase = new UserUseCase()
    fastify.post<{ Body: UserCreate }>('/', (req, reply) => {
        const [name, email] = reply.body
        try {
            const data = userUseCase.create({
                name,
                email
            })
            return reply.send(data)
        } catch (error) {

            reply.send(error)
        }
    })
}