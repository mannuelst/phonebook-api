import { UserRepository } from '../interfaces/user.interface';
import { UserRepositoryPrisma } from '../repositories/user.repository';
import { Contact, ContactCrete, ContactRepository } from './../interfaces/contacts.interface';
import { ContactRepositoryPrisma } from './../repositories/contact.repository';



export class ContactUseCase {
    private contactRepository: ContactRepository
    private userRepository: UserRepository
    constructor() {
        this.contactRepository = new ContactRepositoryPrisma()
        this.userRepository = new UserRepositoryPrisma()
    }

    async create({ name, email, phone, userId }: ContactCrete): Promise<Contact> {
        const existUser = await this.userRepository.findByEmail(email)
        if (!existUser) {
            throw new Error('User Not FOund!')
        }
        const contactExist = await this.contactRepository.findByEmailOrPhone(email, phone)
        if (contactExist) {
            throw new Error('Contact already exists!')
        }


        const result = await this.contactRepository.create({ name, email, phone, userId: existUser.id })
        return result
    }
}

