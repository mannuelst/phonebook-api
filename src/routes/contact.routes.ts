
import { FastifyInstance } from 'fastify';

import { ContactCrete } from '../interfaces/contacts.interface';
import { ContactUseCase } from '../usecases/contact.usecase';
import { authMiddleware } from '../middleware/auth.middleware';


export async function contactRoutes(fastify: FastifyInstance) {
    const contactUseCase = new ContactUseCase()
    fastify.addHook('preHandler', authMiddleware)
    fastify.post<{ Body: ContactCrete }>('/', async (req, reply) => {
        const { name, email, phone } = req.body
        const userId = req.headers['email']
        try {
            const data = await contactUseCase.create({
                name,
                email,
                phone,
                userId: userId,
            })
            return reply.send(data)
        } catch (error) {

            reply.send(error)
        }
    })
    // fastify.get('/', (req, reply) => {
    //     reply.send({ message: 'Hi User!!!' })
    // })
}

