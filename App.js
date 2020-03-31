import React from 'react';
import Home from './Home';
import Add from './Add';
import Post from './Post'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    
    <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Add' component={Add}></Route>
          <Route exact path='/Post' component={Post}></Route>
          </Switch>
          </Router>
  );
}

export default App;
