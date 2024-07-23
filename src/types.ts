export interface Contact {
  id: string;
  name: string;
  email: string;
  photo: string
  phone: number;
}

export type ApiContact = Omit<Contact, 'id'>;

export interface ApiContacts {
  [id: string]: ApiContact;
}

export interface ContactMutation {
  name: string;
  email: string;
  photo: string
  phone: string;
}
