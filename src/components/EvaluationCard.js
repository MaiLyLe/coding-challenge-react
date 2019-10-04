import React from 'react';
import {
  Card,
  CardContent,
  CardActionArea,
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
  correctAnswersDisplay: {
    backgroundColor: '#CCCDCF'
  },
  answerText: {
    fontSize: '6rem'
  }
}));

function EvaluationCard({ totalNumberOfQuestions, numberOfRightAnswers }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea className={classes.correctAnswersDisplay}>
          <CardContent>
            <Typography
              align="center"
              gutterBottom
              variant="h1"
              className={classes.answerText}
            >
              {`(${numberOfRightAnswers}/${totalNumberOfQuestions}) Zitate richtig zugeordnet.`}
              <Typography variant="h5">
                Die Zitatsammlung zeigt teils, dass sich Björn Höckes Ansichten
                sich auf Hitlers Ideologie stützen. Dennoch streitet Höcke ab,
                ein Nazi zu sein. Ipse lorem...{' '}
              </Typography>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default EvaluationCard;
