import React from 'react';
import ContactItem from '../../components/contact-item/ContactItem';
import GroupedList from '../../components/grouped-list/GroupedList';

const contacts = {
  a: Array(7).fill(0).map((_, i) => ({id:i, name:'armen', number: '123'})),
  b: Array(7).fill(0).map((_, i) => ({id:i+100, name:'brmen', number: '123456789'})),
};

export default function Content() {
  return <GroupedList
    items={contacts}
    renderer={(item) => <ContactItem key={item.id} contact={item} />}
  />;
}
