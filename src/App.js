import logo from './logo.svg';
import './App.css';
import React, {useContext, useEffect} from 'react';
import {ThemeProvider} from '@material-ui/core';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
function App() {
  return (
      <BrowserRouter>
        {/*<ThemeProvider >*/}
          {/*<AuthProvider>*/}
            <MainLayout>

            </MainLayout>
          {/*</AuthProvider>*/}
        {/*</ThemeProvider>*/}
      </BrowserRouter>
  );
}

export default App;
