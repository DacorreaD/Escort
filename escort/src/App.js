import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation />
      <p>Hola mundo</p>
      <div className="container-routes">
        <Route path="/SignUp" component={SignUp} />
      </div>
    </Router>    
    </div>
  );
}

export default App;
