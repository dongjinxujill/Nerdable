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
    <p className="header-name">Hi, {currentUser.username}!</p>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
