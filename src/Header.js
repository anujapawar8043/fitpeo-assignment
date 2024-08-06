import React from 'react';
import './styles/Header.scss';

function Header() {
  return (
    <header className="header">
      <input className="search-bar" type="text" placeholder="Search" />
      <div>Icons</div>
    </header>
  );
}

export default Header;

