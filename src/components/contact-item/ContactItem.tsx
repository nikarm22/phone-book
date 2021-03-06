import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import IContact from '../../constants/types/contact';

export interface IContactItemProps {
  contact: IContact;
  onClick: () => void;
}

export default function ContactItem(props: IContactItemProps) {
  const { contact, onClick } = props;

  return (
    <ListItem onClick={onClick}>
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
