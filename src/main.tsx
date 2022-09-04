import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react';
import { store } from './app/store';
import { Provider } from 'react-redux';

import App from './App';
import { theme } from './app/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
