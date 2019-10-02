import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Routes from './Routes';
import Header from './components/Header';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: 'Anton, sans-serif',
      fontSize: '10rem'
    },
    h6: {
      fontFamily: 'Anton, sans-serif'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
