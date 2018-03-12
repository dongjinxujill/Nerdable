import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
    <span className="pipe">  &nbsp;| &nbsp; </span>
    <Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <div class="dropdown">
      <button class="dropbtn">{currentUser.username}&nbsp;<i className="fas fa-sort-down"></i></button>
      <div class="dropdown-content">
        <a><button className="header-button" onClick={logout}>Log Out</button></a>
        <a><Link className="header-link" to="/projects/new">New Project</Link></a>
      </div>
    </div>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
