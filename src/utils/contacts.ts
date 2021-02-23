import { ContactsCollection, GroupedContactsCollection } from "../stores/contacts";

export const groupContactsCollection = (contacts: ContactsCollection): GroupedContactsCollection => Object.values(contacts).reduce((acc, contact) => {
  const firstLetter = contact.name.charAt(0).toUpperCase();
  if (!acc[firstLetter]) acc[firstLetter] = [];
  acc[firstLetter].push(contact);

  return acc;
}, {} as GroupedContactsCollection);

export const filterContacts = (contacts: ContactsCollection, search: string): ContactsCollection => Object.fromEntries(
  Object.entries(contacts).filter(([id, contact]) => contact.name.toLowerCase().startsWith(search.toLowerCase())),
);
