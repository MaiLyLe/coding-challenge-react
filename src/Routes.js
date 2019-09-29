import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Pages
import StartPage from './containers/StartPageContainer/StartPage';
import MessageDashboardPage from './containers/MessageDashboardContainer/MessageDashboardPage';
import PersonalMessagePage from './containers/PersonalMessagesContainer/PersonalMessagePage';

export default class Routes extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/" component={StartPage} />
        <Route path="/MessageDashboard" component={MessageDashboardPage} />
        <Route path="/PersonalMessages" component={PersonalMessagePage} />
      </Switch>
    );
  }
}
