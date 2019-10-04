import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Routes from './Routes';
import quizPageReducer from './containers/QuizContainer/reducers';
import watcherSagaQuizPage from './containers/QuizContainer/sagas';
import Header from './components/Header';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(quizPageReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(watcherSagaQuizPage);

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: 'Anton, sans-serif',
      fontSize: '10rem',
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '6rem'
      }
    },
    h6: {
      fontFamily: 'Anton, sans-serif'
    }
  }
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
            <Header />
            <Routes />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
