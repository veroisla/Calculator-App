import React from 'react';
import '../styles/components/Header.scss';
import INNOCV from '../images/innocv-header.png';

function Header() {
  return (
    <header className="header">
      <a
        href="https://www.innocv.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        <img className="header__logo" src={INNOCV} alt="innocv logo header" />
      </a>
    </header>
  );
}

export default Header;
