import React from 'react';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="brand">
          <h1>MADE BY SOLACE</h1>
        </div>
        <nav>
          <ul className="nav-list">
            <li><a href="/">HOME</a></li>
            <li><a href="/services">SERVICES</a></li>
            <li><a href="/schedule">SCHEDULE</a></li>
            <li><a href="/pricing">PRICING</a></li>
            <li><a href="/other">OTHER</a></li>
            <li><a href="/login" className="login-btn">LOGIN</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
