import React from 'react';
import Header from '../header/Header';
import Content from '../content/Content';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  app: {
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
