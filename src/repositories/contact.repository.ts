import { prisma } from '../lib/prisma-client';
import { Contact, ContactCreateData, ContactRepository } from './../interfaces/contacts.interface';
export class ContactRepositoryPrisma implements ContactRepository {
    async create(data: ContactCreateData): Promise<Contact> {
        const result = await prisma.contact.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                userId: data.userId
            }
        })

        return result
    }
    async findByEmailOrPhone(email: string, phone: string): Promise<Contact | null> {
        const result = await prisma.contact.findFirst({
            where: {
                OR: [{
                    email
                },
                {
                    phone
                }]
            }
        })
        return result || null
    }
    findAllContacts(userEmail: string): Promise<Contact[]> {
        const result = await prisma.contact.findMany({
            where: {
                userId: userEmail


            }
        })
        return result

    }
}