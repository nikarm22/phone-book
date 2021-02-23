
import React, { useCallback, useState } from 'react';
import ContactDialog from '../../components/contact-dialog/ContactDialog';
import ContactItem from '../../components/contact-item/ContactItem';
import GroupedList from '../../components/grouped-list/GroupedList';
import Fab from '@material-ui/core/Fab';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AddIcon from '@material-ui/icons/Add';
import { useContacts } from '../../stores/contacts';
import IContact from '../../constants/types/contact';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 100,
  },
}));

export default function ContactList() {
  const { contacts, groupedContacts, activeContactId, setActiveContactId, addContact, updateContact } = useContacts();
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = useCallback(() => setDialogOpen(true), [setDialogOpen]);
  const closeDialog = useCallback(() => {
    setDialogOpen(false);
    setActiveContactId('');
  }, [setDialogOpen, setActiveContactId]);

  const isEditMode = !!activeContactId;

  const handleSave = useCallback(
    (data: Partial<IContact>) => {
      if (isEditMode) {
        updateContact(activeContactId, data);
      } else {
        addContact(data);
      }
    },
    [activeContactId, isEditMode, updateContact, addContact],
  );

  const handleItemClick = useCallback(
    (id: string) => {
      setActiveContactId(id);
      openDialog();
    },
    [setActiveContactId, openDialog],
  )

  const classes = useStyles();
  return <>
      <GroupedList
        items={groupedContacts}
        renderer={(item) => <ContactItem key={item.id} contact={item} onClick={() => handleItemClick(item.id)} />}
      />
    <ContactDialog
      contact={contacts[activeContactId]}
      onSave={handleSave}
      onClose={closeDialog}
      isOpen={isDialogOpen}
      isEditMode={isEditMode}
    />
    <Fab color="primary" className={classes.fab} onClick={openDialog}>
      <AddIcon />
    </Fab>
  </>;
}
