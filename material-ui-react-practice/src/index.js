import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/auth-context';

const theme = createTheme({
  palette: {
    primary:{
      main: "#CCC"
    },
    secondary:{
      main: orange[500]
    }
  },
  typography: {
    myVariant: {
      fontSize: "6rem"
    }
  }
})

//removed strict mode and theme provider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
);

