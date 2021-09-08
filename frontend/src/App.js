import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './style/style.scss'
import { HomePage } from './pages/HomePage/HomePage'
import { GamePage } from './pages/GamePage/GamePage';

function App() {

  return (
    <div className="App ">
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={GamePage} exact path="/game/:gameId" />
      </Switch>
    </div>

  );
}

export default App;

