import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './app/store';
import { Provider } from 'react-redux';

import App from './App';
import { chakraTheme } from './app/chakraTheme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={chakraTheme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
