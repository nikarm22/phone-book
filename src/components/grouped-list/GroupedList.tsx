import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import { makeStyles } from '@material-ui/core/styles';

export interface IGroupedListProps<T> {
  items: { [group: string]: T[] };
  renderer: (item: T) => React.ReactElement;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

export default function GroupedList<T>(props: IGroupedListProps<T>) {
  const { items, renderer } = props;
  const classes = useStyles();

  const groups = Object.keys(items);

  return (
    <List className={classes.root} subheader={<li />}>
      {groups.map((group) => (
        <li className={classes.listSection} key={group}>
          <ul className={classes.ul}>
            <ListSubheader>{group}</ListSubheader>
            {items[group].map((item) => (renderer(item)))}
          </ul>
        </li>
      ))}
    </List>
  );
}
