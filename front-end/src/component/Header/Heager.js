import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your CSS file
import { useAuth } from '../pages/auth';

function Header() {
  const { isLoggedIn } = useAuth();
  
  return (
    <header className="header">
      <div className="frame">
        <nav className="nav">
          <div className="nav-list">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/todo">Todolist</Link></li>
              {isLoggedIn ? (
                <>
                  
                  <li><Link to="/logout">Logout</Link></li>
                  
                </>
              ) : (
                <>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signin">Sign In</Link></li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
