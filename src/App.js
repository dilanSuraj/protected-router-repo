import React from 'react';
import './App.css';
import {LandingPage} from './components/LandingPage.component';
import {AppLayout} from './components/App.Layout.component';
import {ProtectedRoute} from './components/protected.route';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {    
  return (
    <div style={{textAlign:"center"}}>
      <h1>
        Protected Router
      </h1>
      <Switch>
      <Route path="/landing" component={LandingPage}/>
      <ProtectedRoute path="/app-layout" component={AppLayout}/>
      <Route path="*" component={() =>
        "404 Not found"
      }/>
      </Switch>
    </div>
  );
}

export default App;
