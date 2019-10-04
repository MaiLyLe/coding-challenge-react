/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardActionArea,
  Button,
  Grid,
  Typography
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    justifyContent: 'center'
  },
  cardMedia: {
    maxHeight: 400
  },
  card: {
    margin: 'auto',
    [theme.breakpoints.only('lg')]: {
      marginTop: 180
    },
    [theme.breakpoints.only('md')]: {
      marginTop: 200
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 250
    }
  },
  quote: {
    fontStyle: 'italic'
  },
  cardActions: {
    justifyContent: 'center'
  },
  buttonContainer: {
    [theme.breakpoints.down('md')]: {
      direction: 'column',
      alignItems: 'center',
      justify: 'center'
    }
  },
  answerButtonSelected: {
    margin: 'auto',
    marginTop: 10,
    fontWeight: 400,
    fontSize: 20,
    background: 'linear-gradient(45deg, #e91e63 30%, #424242  90%)',
    color: 'white',

    [theme.breakpoints.down('xl')]: {
      width: 900
    },

    [theme.breakpoints.down('sm')]: {
      width: 450
    }
  },
  answerButtonUnselected: {
    margin: 'auto',
    marginTop: 10,
    fontWeight: 400,
    fontSize: 20,
    backgroundColor: 'black',
    color: 'white',

    [theme.breakpoints.down('xl')]: {
      width: 900
    },

    [theme.breakpoints.down('sm')]: {
      width: 450
    }
  },
  greenCardContent: {
    backgroundColor: '#B7E7DF'
  },
  redCardContent: {
    backgroundColor: '#F3B9CD'
  },
  evaluationInfo: {
    fontWeight: 700
  }
}));

function QuizCard({
  width,
  quote,
  imageUrl,
  possibleAnswers,
  rightAnswer,
  onClickContinue,
  counter
}) {
  const classes = useStyles();
  const [chosenButton, setChosenButton] = useState('');
  const [alreadyAnswered, setAlreadyAnswered] = useState(false);
  const [correctlyGuessed, setCorrectlyGuessed] = useState(false);

  const handleClickAnswer = answer => {
    setChosenButton(answer);
    if (answer === rightAnswer) {
      setCorrectlyGuessed(true);
    }
    setAlreadyAnswered(true);
  };

  const displayCorrectAnswerField = () => {
    if (chosenButton) {
      return (
        <Typography variant="body1" className={classes.evaluationInfo}>
          {correctlyGuessed
            ? `Richtig. Dies ist eine Aussage von ${rightAnswer}`
            : `Falsch. Es handelt sich um eine Aussage von ${rightAnswer}`}
        </Typography>
      );
    }
    return null;
  };

  const displayContinueButton = () => {
    if (alreadyAnswered) {
      return (
        <Grid item>
          <Button onClick={onClickContinue}>{'Continue >'} </Button>
        </Grid>
      );
    }
    return null;
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Bjoern Test"
            image={imageUrl}
            className={classes.cardMedia}
          />
          <CardContent
            className={
              !chosenButton
                ? null
                : correctlyGuessed
                ? classes.greenCardContent
                : classes.redCardContent
            }
          >
            <Typography gutterBottom variant="h4">
              {`Zitat ${counter + 1}`}
            </Typography>
            <Typography className={classes.quote} gutterBottom variant="body1">
              {quote}
            </Typography>
            {displayCorrectAnswerField()}
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            {possibleAnswers.map(answer => (
              <Grid item>
                <Button
                  size="large"
                  onClick={
                    !alreadyAnswered ? () => handleClickAnswer(answer) : null
                  }
                  className={
                    answer === chosenButton
                      ? classes.answerButtonSelected
                      : classes.answerButtonUnselected
                  }
                >
                  {answer}
                </Button>
              </Grid>
            ))}
            {displayContinueButton()}
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}

export default QuizCard;
