import React from "react";
import {NavLink} from "react-router-dom";
function Navigation()
{

return(
<React.Fragment>
<nav className="navbar navbar-expand-sm  navbar-dark bg-dark">
  
  <a className="navbar-brand bg-dark" href="/">
    <img src="https://www.airforce.gov.au/sites/default/files/raaf-co-branding-logo_0.png" alt="logo" ></img>
  </a>
  

  <ul className="navbar-nav ">
  <li className="nav-item">
      <NavLink className="nav-link" to="/">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/vision">AF 100</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/aboutus">About us</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/operations">Operations</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/ourmission">Our mission</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/ourpeople">Our people</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/technology">Technology</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/newsandevents">News and events</NavLink>
    </li>
  
   
   
    
  </ul>
</nav>
  

  



</React.Fragment>




);

}
export default Navigation;