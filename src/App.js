import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/Login'
import Cards from './components/Content/Cards'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Cards />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
