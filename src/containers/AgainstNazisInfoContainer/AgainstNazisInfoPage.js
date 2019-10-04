import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import imageInfoPage from '../../assets/imageInfoPage.png';

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
    marginTop: 100,
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    [theme.breakpoints.only('md')]: {
      marginTop: 300
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 350
    }
  },
  content: {
    height: 500,
    width: 400,
    [theme.breakpoints.down('sm')]: {
      width: 400
    }
  },
  cover: {
    width: 300,
    [theme.breakpoints.down('sm')]: {}
  },
  title: {
    backgroundColor: 'black',
    color: 'white',
    paddingLeft: 5
  },
  contentBody: {
    marginTop: 30
  }
}));

function AgainstNazisInfoPage(props) {
  const classes = useStyles();
  const { width } = props;
  const displayImage = () => {
    if (isWidthUp('sm', width)) {
      return (
        <CardMedia
          className={classes.cover}
          image={imageInfoPage}
          title="Live from space album cover"
        />
      );
    }
    return null;
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        {displayImage()}

        <div>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" className={classes.title}>
              Schaut nicht weg!
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.contentBody}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default withWidth()(AgainstNazisInfoPage);
