
import { FastifyInstance } from 'fastify';

import { Contact, ContactCreate } from '../interfaces/contacts.interface';
import { authMiddleware } from '../middleware/auth.middleware';
import { ContactUseCase } from '../use-cases/contact.usecase';


export async function contactRoutes(fastify: FastifyInstance) {
    const contactUseCase = new ContactUseCase()
    fastify.addHook('preHandler', authMiddleware)

    fastify.post<{ Body: ContactCreate }>('/', async (req, reply) => {
        const { name, email, phone } = req.body
        const emailUser = req.headers['email']

        try {
            const data = await contactUseCase.create({
                name,
                email,
                phone,
                userEmail: emailUser,
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
    fastify.put<{ Body: Contact; Params: { id: string } }>('/:id', async (req, reply) => {
        const { id } = req.params
        const { name, email, phone } = req.body
        try {
            const data = await contactUseCase.updateContact({ name, email, phone }),

        } catch (error) {
            reply.send(error)

        }

    })
    fastify.delete<{ Params: { id: string } }>('/:id', (req, reply) => {
        const { id } = req.params
        try {
            const data = await contactUseCase.delete(id),
            return data

        } catch (error) {
            reply.send(error)

        }
    })
}

