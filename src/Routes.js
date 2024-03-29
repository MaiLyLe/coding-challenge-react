import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Pages
import StartPage from './containers/StartPageContainer/StartPage';
import QuizPage from './containers/QuizContainer/QuizPage';
import AgainstNazisInfoPage from './containers/AgainstNazisInfoContainer/AgainstNazisInfoPage';

export const routeMap = {
  Quiz: '/QuizPage',
  About: '/AgainstNazisInfoPage'
};

export default class Routes extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route exact path={routeMap.Quiz} component={QuizPage} />
        <Route exact path={routeMap.About} component={AgainstNazisInfoPage} />
      </Switch>
    );
  }
}
