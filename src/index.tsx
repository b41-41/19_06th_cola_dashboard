import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GrobalStyles from 'styles/globalStyles';
import { theme } from 'styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from 'redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GrobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
