import { Contact, ContactRepository } from './../interfaces/contacts.interface';
export class ContactRepositoryPrisma implements ContactRepository {
    create(data: ContactCrete): Promise<Contact> {

    }

}