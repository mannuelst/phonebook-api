import { Contact, ContactCreate, ContactRepository } from '../interfaces/contacts.interface';
import { UserRepository } from '../interfaces/user.interface';
import { ContactRepositoryPrisma } from '../repositories/contact.repository';
import { UserRepositoryPrisma } from '../repositories/user.repository';



export class ContactUseCase {
    private contactRepository: ContactRepository
    private userRepository: UserRepository
    constructor() {
        this.contactRepository = new ContactRepositoryPrisma()
        this.userRepository = new UserRepositoryPrisma()
    }

    async create({ name, email, phone, userEmail }: ContactCreate): Promise<Contact> {
        const existUser = await this.userRepository.findByEmail(email)
        if (!existUser) {
            throw new Error('User Not FOund!')
        }
        const contactExist = await this.contactRepository.findByEmailOrPhone(email, phone)
        if (contactExist) {
            throw new Error('Contact already exists!')
        }


        const contact = await this.contactRepository.create({ name, email, phone, userId: existUser.id })
        return contact
    }
    async listAllContacts(userEmail: string) {
        const user = await this.userRepository.findByEmail(userEmail)
        if (!user) {

            throw new Error('User not found!')
        }
        const contacts = await this.contactRepository.findAllContacts(user.id)
        return contacts

    }
    async updateContact({ id, name, email, phone }: Contact) {
        const data = await this.contactRepository.updateContact(id, name, email, phone)
        return data
    }
    async delete(id: string) {
        const data = await this.contactRepository.delete(id)
        return data
    }
}

