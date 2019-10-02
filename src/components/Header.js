/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Typography, Fab } from '@material-ui/core/';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { makeStyles } from '@material-ui/styles';
import SideDrawer from './SideDrawer';

const useStyles = makeStyles(theme => ({
  headerContainer: {
    color: 'white',
    position: 'fixed',
    top: theme.spacing.unit * 6,
    left: theme.spacing.unit * 7
  },
  header: {
    fontSize: '10rem'
  },
  headerSubtitle: {
    color: 'white'
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
  }
}));

const pageNames = {
  '/': ['Start', '...protesting'],
  '/QuizPage': ['Quiz', "Wer hat's geagt? Hitler or Björn Höcke?"],
  '/AgainstNazisInfoPage': ['Unite', '...against Right-Wing Extremism.']
};

function Header(props) {
  const classes = useStyles();
  const [drawerOpen, setDrawerState] = useState(false);
  const {
    location: { pathname }
  } = props;

  const toggleDrawer = () => {
    setDrawerState(oldDrawerState => !oldDrawerState);
  };
  return (
    <div>
      <div className={classes.headerContainer}>
        <Typography variant="h1" classes={classes.header}>
          {pageNames[pathname][0]}
        </Typography>
        <Typography variant="h6"> {pageNames[pathname][1]} </Typography>
      </div>
      <Fab color="secondary" onClick={toggleDrawer} className={classes.fab}>
        <ArrowLeftIcon className={classes.arrow} />
      </Fab>
      <SideDrawer
        pathname={pathname}
        toggleDrawer={toggleDrawer}
        drawerState={drawerOpen}
      />
    </div>
  );
}

export default withRouter(Header);
