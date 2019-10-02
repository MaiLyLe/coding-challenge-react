import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Fab
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/styles';
import { routeMap } from '../Routes';

const useStyles = makeStyles(theme => ({
  drawerContent: {
    width: 210
  },
  fab: {
    margin: theme.spacing.unit, // You might not need this now
    position: 'fixed',
    top: theme.spacing.unit * 5,
    right: theme.spacing.unit * 5,
    height: '100px',
    width: '100px'
  },
  arrow: {
    height: '100px',
    width: '100px'
  },
  list: {
    marginTop: 190
  },
  listItemText: {
    color: 'black',
    marginLeft: 10
  }
}));

const secondaryTextMap = {
  Quiz: "Wer hat's gesagt? Hitler or Björn?",
  About: 'Was tun gegen Nazis im Netz?'
};

const SideDrawer = ({ pathname, toggleDrawer, drawerState }) => {
  const classes = useStyles();
  return (
    <Drawer anchor="right" open={drawerState}>
      <div className={classes.drawerContent}>
        <Fab
          color="secondary"
          aria-label="edit"
          className={classes.fab}
          onClick={toggleDrawer}
        >
          <ArrowRightIcon className={classes.arrow} />
        </Fab>
        <List className={classes.list}>
          {Object.keys(routeMap).map(item => (
            <ListItem selected={routeMap[item] === pathname}>
              <Link to={routeMap[item]} style={{ textDecoration: 'none' }}>
                <ListItemText
                  className={classes.listItemText}
                  primary={
                    <Typography variant="h5">{item.toUpperCase()}</Typography>
                  }
                  secondary={secondaryTextMap[item]}
                />
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default SideDrawer;
