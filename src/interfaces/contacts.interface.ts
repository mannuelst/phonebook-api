export interface Contact {
    id: string,
    name: string,
    email: string,
    phone: string,
    userId: string
}


export interface ContactCrete {
    name: string,
    email: string,
    phone: string,
    userId: string
}

export interface ContactRepository {
    create(data: ContactCrete): Promise<Contact>
}