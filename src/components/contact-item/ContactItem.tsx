import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import IContact from '../../constants/types/contact';

export interface IContactItem {
  contact: IContact;
}

export default function ContactItem(props: IContactItem) {
  const { contact } = props;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{contact.name.charAt(0).toUpperCase() || '#'}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={contact.name}
        secondary={contact.number}
      />
    </ListItem>
  );
}
