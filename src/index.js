import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

