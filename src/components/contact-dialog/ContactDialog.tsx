import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Avatar, makeStyles } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import IContact from '../../constants/types/contact';

export interface IContactDialogProps {
  contact?: IContact;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Partial<IContact>) => void;
  isEditMode?: boolean;
}

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 'auto',
    width: theme.spacing(16),
    height: theme.spacing(16),
    cursor: 'pointer',
  },
}));

export default function ContactDialog(props: IContactDialogProps) {
  const { contact, isOpen, onClose, onSave, isEditMode } = props;

  const [currentName, setCurrentName] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');

  const handleNameChange = (event: any) => setCurrentName(event.target.value);
  const handleNumberChange = (event: any) => setCurrentNumber(event.target.value);

  const handleSave = useCallback(() => {
    setCurrentName('');
    setCurrentNumber('');
    onSave({ name: currentName, number: currentNumber });
    onClose();
  }, [setCurrentName, setCurrentNumber, onSave, onClose, currentName, currentNumber]);

  const handleKeyUp = useCallback((event) => {
    if (event.key === 'Enter') handleSave();
  }, [handleSave]);

  useEffect(() => {
    if(contact) {
      setCurrentName(contact.name);
      setCurrentNumber(contact.number);
    } else {
      setCurrentName('');
      setCurrentNumber('');
    }
  }, [isOpen, contact]);

  const classes = useStyles();

  return (
    <Dialog open={isOpen} onClose={onClose} onKeyUp={handleKeyUp}>
      <DialogTitle>{ isEditMode ? 'Edit Contact' : 'Add Contact' }</DialogTitle>
      <DialogContent>
        <Avatar className={classes.avatar}></Avatar>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={currentName}
          onChange={handleNameChange}
        />
        <TextField
          margin="dense"
          label="Number"
          type="text"
          fullWidth
          value={currentNumber}
          onChange={handleNumberChange}
        />
      </DialogContent>
      <DialogActions>
        <Button
          fullWidth
          color="secondary"
          variant="contained"
          size="small"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          size="small"
          onClick={handleSave}
        >
          { isEditMode ? 'Save' : 'Add' }
        </Button>
      </DialogActions>
    </Dialog>
  );
}
