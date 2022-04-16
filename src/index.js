import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // BORRAR
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import theme from './themes'

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

reportWebVitals();
