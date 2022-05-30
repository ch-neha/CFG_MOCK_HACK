import React from 'react';
import {NavLink,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home'
import RegisterPage from './Components/RegisterPage'



function App()
{
  return(
  
    <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
    <a className="navbar-brand" href="#">My App</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to=''>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to=''>Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to=''>Sign Up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to=''>Content</NavLink>
        </li>
      </ul>
      </div>
      </div>
      </nav>




      </div>
    );
    }



export default App;