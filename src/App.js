import React from 'react';
import {NavLink,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home'
import RegisterPage from './Components/RegisterPage'
import Login from './Components/Login/login'
import Contactus from './Components/Contactus'

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
          <NavLink className="nav-link" to='login'>Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='register'>Sign Up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='contactus'>Contact us</NavLink>
        </li>
      </ul>
      </div>
      </div>
      </nav>

      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/contactus" element={<Contactus/>}/>
      </Routes>
      



      </div>
    );
    }



export default App;