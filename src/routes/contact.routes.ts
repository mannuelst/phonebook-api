
import { FastifyInstance } from 'fastify';

import { ContactCreate } from '../interfaces/contacts.interface';
import { authMiddleware } from '../middleware/auth.middleware';
import { ContactUseCase } from '../use-cases/contact.usecase';


export async function contactRoutes(fastify: FastifyInstance) {
    const contactUseCase = new ContactUseCase()
    fastify.addHook('preHandler', authMiddleware)
    fastify.post<{ Body: ContactCreate }>('/', async (req, reply) => {
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
    fastify.get('/', async (req, reply) => {
        const emailUser = req.headers['email']
        try {

            const data = await contactUseCase.listAllContacts(emailUser)
            return reply.send(data)

        } catch (error) {

            reply.send(error)
        }
    })
}

