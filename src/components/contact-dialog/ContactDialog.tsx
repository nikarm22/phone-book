import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Avatar, makeStyles } from '@material-ui/core';
import React from 'react';
import IContact from '../../constants/types/contact';

export interface IContactDialogProps {
  contact?: IContact;
  isOpen: boolean;
  onClose: () => void;
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
  const { contact, isOpen, onClose, isEditMode } = props;

  const classes = useStyles();

  return (
    <Dialog open={isOpen} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle>{ isEditMode ? 'Edit Contact' : 'Add Contact' }</DialogTitle>
      <DialogContent>
        <Avatar className={classes.avatar}></Avatar>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          label="Number"
          type="text"
          fullWidth
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
          onClick={onClose}
        >
          { isEditMode ? 'Save' : 'Add' }
        </Button>
      </DialogActions>
    </Dialog>
  );
}
