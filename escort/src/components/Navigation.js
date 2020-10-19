import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
         <nav className="navbar navbar-dark gb-dark">
        <h1 className="h4">Escort</h1>
        <div className="inline">
          <a href="" className="registro">Sing Up</a>
          <a href="" className="inicio">Log In</a>
        </div>
      </nav>
    );
}

export default Navigation;