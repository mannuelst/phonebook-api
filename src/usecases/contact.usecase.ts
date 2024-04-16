import { Contact, ContactCrete, ContactRepository } from './../interfaces/contacts.interface';
import { ContactRepositoryPrisma } from './../repositories/contact.repository';



export class ContactUseCase {
    private contactRepository: ContactRepository
    constructor() {
        this.contactRepository = new ContactRepositoryPrisma()
    }

    async create({ name, email, phone, userId }: ContactCrete): Promise<Contact> {
        const existContact = await this.contactRepository.findByEmail(email)
        if (existContact) {
            throw new Error('Contact already exists')
        }

        const result = await this.contactRepository.create({ name, email, phone, userId })
        return result
    }
}

