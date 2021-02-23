import React, { SetStateAction, useCallback, useContext, useMemo, useState } from 'react';
import IContact from '../../constants/types/contact';
import noop from '../../utils/noop';
import { groupContactsCollection, filterContacts } from '../../utils/contacts';
import { v4 as uuid } from 'uuid';


export type ContactsCollection = { [id: string]: IContact };

export type GroupedContactsCollection = { [letter: string]: IContact[] };
interface IContactsContext {
  searchQuery: string;
  setSearchQuery: React.Dispatch<SetStateAction<string>>;
  contacts: ContactsCollection;
  groupedContacts: GroupedContactsCollection;
  addContact: (contactData: Partial<IContact>) => void;
  removeContact: (id: string) => void;
  updateContact: (id: string, contactData: Partial<IContact>) => void;
  activeContactId: string;
  setActiveContactId: React.Dispatch<SetStateAction<string>>;
}

const initialState = {
  searchQuery: '',
  setSearchQuery: noop,
  contacts: {},
  groupedContacts: {},
  addContact: noop,
  removeContact: noop,
  updateContact: noop,
  activeContactId: '',
  setActiveContactId: noop,
};

const ContactsContext = React.createContext<IContactsContext>(initialState);

type ContactsContextProviderProps = React.PropsWithChildren<{}>;

export function ContactsContextProvider(props: ContactsContextProviderProps) {
  const [contacts, setContacts] = useState<ContactsCollection>(initialState.contacts);
  const [searchQuery, setSearchQuery] = useState(initialState.searchQuery);
  const [activeContactId, setActiveContactId] = useState(initialState.activeContactId);

  const activeContacts = useMemo(() => filterContacts(contacts, searchQuery), [contacts, searchQuery]);

  const groupedContacts = useMemo(() => groupContactsCollection(activeContacts), [activeContacts]);

  const addContact = useCallback((contactData: Partial<IContact>) => {
    const id = String(uuid());
    const contact = { ...contactData, id } as IContact;
    setContacts(prev => ({ ...prev, [id]: contact }))
  }, [setContacts]);

  const removeContact = useCallback((id: string) => {
    setContacts(prev => {
      const { [id]: removed, ...restContacts } = prev;
      return restContacts;
    });
  }, [setContacts]);

  const updateContact = useCallback((id: string, contactData: Partial<IContact>) => {
    setContacts(prev => {
      const contacts = { ...prev, [id]: { ...prev[id], ...contactData }};
      return contacts;
    });
  }, [setContacts]);

  return <ContactsContext.Provider value={{
    searchQuery,
    setSearchQuery,
    contacts,
    groupedContacts,
    addContact,
    removeContact,
    updateContact,
    activeContactId,
    setActiveContactId,
  }}>
    {props.children}
  </ContactsContext.Provider>;
}

export const useContacts = () => useContext(ContactsContext);
