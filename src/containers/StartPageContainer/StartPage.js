import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import protest from '../../assets/protest.png';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    justifyContent: 'center'
  },
  circular: {
    margin: 'auto',
    display: 'block',
    width: 500,
    height: 500,
    borderRadius: 250,
    border: '6px solid black',
    [theme.breakpoints.down('md')]: {
      marginTop: 150,
      width: 300,
      height: 300,
      borderRadius: 150
    }
  },
  button: {
    margin: 'auto',
    marginTop: 50,
    height: 100,
    fontSize: '1.5rem',
    display: 'block',
    width: 400,
    background: 'linear-gradient(45deg, #e91e63 30%, #424242  90%)',
    color: 'white'
  }
}));

function StartPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={protest} alt="protest" className={classes.circular} />
      <Link to="/QuizPage" style={{ textDecoration: 'none' }}>
        <Button variant="contained" className={classes.button} size="large">
          Start Quiz
        </Button>
      </Link>
    </div>
  );
}

export default StartPage;
