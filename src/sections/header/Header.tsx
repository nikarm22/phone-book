import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchField from '../../components/search-field/SearchField';

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
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          Phone Book
        </Typography>
        <SearchField value="" onChange={() => {}} />
      </Toolbar>
    </AppBar>
  );
}
