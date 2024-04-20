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
    async findAllContacts(userEmail: string): Promise<Contact[]> {
        const result = await prisma.contact.findMany({
            where: {
                userId: userEmail
            }
        })
        return result

    }
    async updateContact({ id, name, email, phone }: Contact): Promise<Contact> {
        const result = await prisma.contact.update({
            where: {
                id
            },
            data: {
                name,
                email,
                phone
            }
        })
        return result
    }
    async delete(id: string): Promise<boolean> {
        const result = await prisma.contact.delete({
            where: {
                id
            }
        })
        return result ? true : false
    }
}