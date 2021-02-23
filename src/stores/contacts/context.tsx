import React, { SetStateAction, useContext, useState } from 'react';
import IContacts from '../../constants/types/contact';
import noop from '../../utils/noop';

interface IContactsContext {
  searchQuery: string,
  setSearchQuery: React.Dispatch<SetStateAction<string>>,
}

const initialState = {
  searchQuery: '',
  setSearchQuery: noop,
};

const ContactsContext = React.createContext<IContactsContext>(initialState);

type ContactsContextProvider = React.PropsWithChildren<{}>;

export function ContactsContextProvider(props: ContactsContextProvider) {
  const [contacts, setContact] = useState<IContacts[]>([]);
  const [searchQuery, setSearchQuery] = useState(initialState.searchQuery);

  console.log(searchQuery);

  return <ContactsContext.Provider value={{
    searchQuery,
    setSearchQuery,
  }}>
    {props.children}
  </ContactsContext.Provider>;
}

export const useContacts = () => useContext(ContactsContext);
