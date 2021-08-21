import logo from './logo.svg';
import './App.css';
import React, {useContext, useEffect} from 'react';
import {ThemeProvider} from '@material-ui/core';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import Login from './pages/Login';
import SignUp from "./pages/SignUp";
import IndividualIntro from "./pages/IndividualIntro";
import Timelines from "./pages/timeline";
import Draw from "./pages/component/draw";
import Grade from "./pages/Grade.js";

import Home from "./pages/Home";
import KinderArt from "./pages/KiderArt"
import LetStart from "./pages/LetStart";
import Progress from "./pages/Progress";
import ReportKinderArt from "./pages/ReportKinderArt";
import ReportMath from "./pages/ReportMath"
import ReportSpeak from "./pages/ReportSpeak";
import Talk from "./pages/Talk";


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
                    <Route exact path='/timeline' component={Timelines}/>
                    <Route exact path='/draw' component={Draw}/>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/kinderArt' component={KinderArt}/>
                    <Route exact path='/letStart' component={LetStart}/>
                    <Route exact path='/progress' component={Progress}/>
                    <Route exact path='/reportKinderArt' component={ReportKinderArt}/>
                    <Route exact path='/reportMath' component={ReportMath}/>
                    <Route exact path='/reportSpeak' component={ReportSpeak}/>
                    <Route exact path='/talk' component={Talk}/>
                    <Route exact path='/grade' component={Grade}/>




                </Switch>
            </MainLayout>
          {/*</AuthProvider>*/}
        {/*</ThemeProvider>*/}
      </BrowserRouter>
  );
}

export default App;
