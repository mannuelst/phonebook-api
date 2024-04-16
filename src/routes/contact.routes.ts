
import { FastifyInstance } from 'fastify';

import { ContactCrete } from '../interfaces/contacts.interface';
import { ContactUseCase } from '../usecases/contact.usecase';


export async function contactRoutes(fastify: FastifyInstance) {
    const contactUseCase = new ContactUseCase()
    fastify.post<{ Body: ContactCrete }>('/', async (req, reply) => {
        const { name, email, phone, userId } = req.body
        try {
            const data = await contactUseCase.create({
                name,
                email,
                phone,
                userId,
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

