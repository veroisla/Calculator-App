import React from 'react';
import '../styles/components/Header.scss';
import INNOCV from '../images/innocv-header.png';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={INNOCV} alt="innocv logo header" />
      <h1 className="header__title">calculadora</h1>
    </header>
  );
}

export default Header;
