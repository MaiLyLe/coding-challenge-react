/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';

class Header extends React.Component {
  render() {
    const {
      location: { pathname }
    } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography>{pathname}</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(Header);
