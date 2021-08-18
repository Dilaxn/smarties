import logo from './logo.svg';
import './App.css';
import React, {useContext, useEffect} from 'react';
import {ThemeProvider} from '@material-ui/core';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import Login from './pages/Login';
import SignUp from "./pages/SignUp";
import IndividualIntro from "./pages/IndividualIntro";
function App() {
  return (
      <BrowserRouter>
        {/*<ThemeProvider >*/}
          {/*<AuthProvider>*/}
            <MainLayout>
                <Switch>

                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/signup' component={SignUp}/>
                    <Route exact path='/individualIntro' component={IndividualIntro}/>

                </Switch>
            </MainLayout>
          {/*</AuthProvider>*/}
        {/*</ThemeProvider>*/}
      </BrowserRouter>
  );
}

export default App;
