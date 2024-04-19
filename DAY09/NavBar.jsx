import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">KIET MCA</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/" style={({isActive})=>{(isActive?{color:"green",fontWeight:"bold"}:{color:"White"})}}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/MyCard" style={({isActive})=>{(isActive?{color:"green",fontWeight:"bold"}:{color:"White"})}}>Card</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Languages" style={({isActive})=>{(isActive?{color:"green",fontWeight:"bold"}:{color:"White"})}}>Language</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Student" style={({isActive})=>{(isActive?{color:"green",fontWeight:"bold"}:{color:"White"})}}>Student</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/Product" style={({isActive})=>{(isActive?{color:"green",fontWeight:"bold"}:{color:"White"})}}>Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About" style={({isActive})=>{(isActive?{color:"green",fontWeight:"bold"}:{color:"White"})}}>About US</NavLink>
        </li>
        
          
        {/* <li className="nav-item">
          <NavLink className="nav-link disabled" aria-disabled="true">Disabled</NavLink>
        </li> */}
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
