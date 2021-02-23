import React, { useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchField from '../../components/search-field/SearchField';
import { title } from '../../constants/strings';
import { useContacts } from '../../stores/contacts/context';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function Header() {
  const { searchQuery, setSearchQuery } = useContacts();
  const classes = useStyles();

  const handleSearchChange = useCallback(
    ({ target }) => setSearchQuery(target.value as string),
    [setSearchQuery],
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          {title}
        </Typography>
        <SearchField value={searchQuery} onChange={handleSearchChange} />
      </Toolbar>
    </AppBar>
  );
}
