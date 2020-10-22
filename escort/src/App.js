import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import SignUp from './components/SignUp'
import Banner from './components/Baner'

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation />
      <Banner />
      <div className="container-routes">
        <Route path="/SignUp" component={SignUp} />
      </div>
    </Router>    
    </div>
  );
}

export default App;
