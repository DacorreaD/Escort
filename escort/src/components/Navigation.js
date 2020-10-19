import React, { Component } from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';


export default class Navigation extends Component{
    render(){
        return (
         <nav className="navbar navbar-dark gb-dark">
        <Link to="/Home" className="h4">Escort</Link>
        <div className="inline">
          <Link  className="registro" to="/SignUp">Sign Up</Link>
          <Link  className="inicio">Log In</Link>
        </div>
      </nav>
    );

    }    
}
