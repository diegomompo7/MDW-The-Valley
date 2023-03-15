import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
  colors: {
    yellow: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#fbbf77", // NUESTRO AMARILLO "PERSONALIZADO"
      500: "#2ebcd6", // ESTE ES AZUL
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    },
    // NUESTRO AZUL TIRANDO A MORADO TINTA
    blue: {
      50: "#EFEAFB",
      100: "#D3C4F3",
      200: "#B79EEB",
      300: "#9B78E3",
      400: "#7F51DB",
      500: "#632BD4",
      600: "#4F23A9",
      700: "#3B1A7F",
      800: "#271155",
      900: "#14092A"
    },
    // CUSTOM THEME
    thevalley: {
      50: '#defdf9',
      100: '#bbf1ec',
      200: '#96e6de',
      300: '#6edad0',
      400: '#49cfc3',
      500: '#30b6aa',
      600: '#208e84',
      700: '#10665e',
      800: '#003e39',
      900: '#001715',
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={customTheme}>
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
