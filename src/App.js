import logo from './logo.svg';
import './App.css';
import React, {useContext, useEffect} from 'react';
import {ThemeProvider} from '@material-ui/core';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PrivateRoute from '../src/pages/component/PrivateRoute';

import MainLayout from "./layouts/MainLayout";
import Login from './pages/Login';
import SignUp from "./pages/SignUp";
import IndividualIntro from "./pages/IndividualIntro";
import Timelines from "./pages/timeline";
import Draw from "./pages/component/draw";
import Grade from "./pages/Grade.js";

import Home from "./pages/Home";
import KinderArt from "./pages/KiderArt"
import LetStart from "./pages/component/LetStart";
import Progress from "./pages/Progress";
import ReportKinderArt from "./pages/ReportKinderArt";
import ReportMath from "./pages/ReportMath"
import ReportSpeak from "./pages/ReportSpeak";
import Talk from "./pages/Talk";
import PlayWithMath from './pages/PlayWithMath'
import AdditionSelect from "./pages/AdditionSelect";
// import AdditionTyping from './pages/AdditionTyping';
import DrawFruitTimeline from './pages/DrawFruitsTimeline'
import Identification from './pages/identification';
import NumberIdentify from './pages/NumberIdentify';
import Pronunciation from './pages/Pronunciation'
import Chat from './pages/ChatBot'
import Chips from './pages/check'
import ChatEnter from "./pages/ChatEnter";

function App() {
  return (
      <BrowserRouter>
        {/*<ThemeProvider >*/}
          {/*<AuthProvider>*/}
            <MainLayout>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/signup' component={SignUp}/>
                    <PrivateRoute exact path='/individualIntro' component={IndividualIntro}/>
                    <PrivateRoute exact path='/timeline' component={Timelines}/>
                    <PrivateRoute exact path='/draw' component={Draw}/>
                    <PrivateRoute exact path='/home' component={Home}/>
                    <PrivateRoute exact path='/kinderArt' component={KinderArt}/>
                    <PrivateRoute exact path='/letStart' component={LetStart}/>
                    <PrivateRoute exact path='/progress' component={Progress}/>
                    <PrivateRoute exact path='/reportKinderArt' component={ReportKinderArt}/>
                    <PrivateRoute exact path='/reportMath' component={ReportMath}/>
                    <PrivateRoute exact path='/reportSpeak' component={ReportSpeak}/>
                    <PrivateRoute exact path='/talk' component={Talk}/>
                    <PrivateRoute exact path='/selectGrade' component={Grade}/>
                    <PrivateRoute exact path='/playWithMath' component={PlayWithMath}/>

                    <PrivateRoute exact path='/additionSelect' component={AdditionSelect}/>
                    {/*<Route exact path='/additionTyping' component={AdditionTyping}/>*/}
                    <PrivateRoute exact path='/drawFruitTimeline' component={DrawFruitTimeline}/>
                    <PrivateRoute exact path='/identification' component={Identification}/>
                    <PrivateRoute exact path='/numberIdentify' component={NumberIdentify}/>
                    <PrivateRoute exact path='/pronunciation' component={Pronunciation}/>

                    <PrivateRoute exact path='/chips' component={Chips}/>
                    <PrivateRoute exact path='/chat' component={Chat}/>
                    <PrivateRoute exact path='/chatEnter' component={ChatEnter}/>






                </Switch>
            </MainLayout>
          {/*</AuthProvider>*/}
        {/*</ThemeProvider>*/}
      </BrowserRouter>
  );
}

export default App;
