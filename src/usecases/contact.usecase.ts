import { ContactCrete, ContactRepository } from './../interfaces/contacts.interface';
import { ContactRepositoryPrisma } from './../repositories/contact.repository';



export class ContactUseCase {
    private contactRepository: ContactRepository
    constructor() {
        this.contactRepository = new ContactRepositoryPrisma()
    }

    async create({ name, email, phone, userId }: ContactCrete) { }
}

